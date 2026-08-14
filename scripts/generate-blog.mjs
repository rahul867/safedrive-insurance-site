/**
 * Blog generator.
 *
 * Reads markdown files from content/blog/*.md and writes a static HTML page for
 * every post into blog/<slug>/index.html, plus a listing page at blog/index.html
 * and a fresh public/sitemap.xml.
 *
 * These generated files are gitignored - they are rebuilt on every build (locally
 * and on Vercel) by the "prebuild" script in package.json. Nobody should edit
 * anything inside /blog by hand.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = path.join(root, 'content', 'blog');
const OUT_DIR = path.join(root, 'blog');
const SITE = 'https://safedriveinsurance.in';
const GA_ID = 'G-YXPP4HCLMC';
const CHAT_WIDGET_ID = 'b4f6e232-c325-4a6e-80ff-fe46ca0e34a2';
const WHATSAPP = 'https://wa.me/918077080985';

/* ------------------------------------------------------------------ utils */

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJson(str = '') {
  return String(str).replace(/</g, '\\u003c').replace(/"/g, '\\"');
}

/** Minimal frontmatter parser - supports "key: value" lines only. */
function parseFrontmatter(raw) {
  const text = raw.replace(/^\uFEFF/, '');
  if (!text.startsWith('---')) return { data: {}, body: text };

  const end = text.indexOf('\n---', 3);
  if (end === -1) return { data: {}, body: text };

  const head = text.slice(3, end);
  const body = text.slice(end + 4).replace(/^\r?\n/, '');
  const data = {};

  for (const line of head.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf(':');
    if (idx === -1) continue;

    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (value === 'true') value = true;
    else if (value === 'false') value = false;

    data[key] = value;
  }

  return { data, body };
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function formatDate(value) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return { display: '', iso: '' };
  return {
    display: `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`,
    iso: d.toISOString().slice(0, 10),
  };
}

function readingMinutes(body) {
  const words = body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Vercel image optimisation - resizes and serves WebP automatically.
 * Only used on Vercel; local builds keep the plain path so images work offline.
 */
const ON_VERCEL = Boolean(process.env.VERCEL);

function optimized(src, width) {
  if (!src || /^https?:\/\//.test(src) || !ON_VERCEL) return src;
  return `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=80`;
}

function imageTag(src, alt, { width = 1200, className = '', lazy = true } = {}) {
  if (!src) return '';
  const srcset = ON_VERCEL
    ? [640, 828, 1200]
        .filter((w) => w <= width)
        .map((w) => `${optimized(src, w)} ${w}w`)
        .join(', ')
    : '';
  const responsive = srcset
    ? ` srcset="${escapeHtml(srcset)}" sizes="(max-width: 768px) 100vw, 820px"`
    : '';
  return `<img src="${escapeHtml(optimized(src, width))}"${responsive} alt="${escapeHtml(alt)}"${lazy ? ' loading="lazy"' : ''} decoding="async" class="${className}" />`;
}

/* -------------------------------------------------------------- templates */

const headerHtml = `
  <header class="sticky top-0 z-50 h-[72px] bg-white/90 backdrop-blur-xl border-b border-teal/15">
    <div class="max-w-[1100px] mx-auto h-full flex items-center justify-between px-4 md:px-6">
      <a href="/" class="flex items-center gap-2.5">
        <img src="/safedrive-logo.png" alt="SafeDrive Insurance" class="w-9 h-9 object-contain rounded-lg" width="36" height="36" />
        <span class="flex flex-col">
          <span class="font-montserrat font-bold text-lg text-teal-dark leading-tight">SafeDrive</span>
          <span class="font-opensans text-[11px] text-slate-400 leading-tight">Ride ho jaaye sure!</span>
        </span>
      </a>
      <nav class="flex items-center gap-5">
        <a href="/blog" class="font-montserrat font-semibold text-sm text-teal hover:underline">Blog</a>
        <a href="/" class="font-montserrat font-semibold text-sm text-teal hover:underline">Home</a>
      </nav>
    </div>
  </header>`;

const ctaHtml = `
  <aside class="bg-teal/5 rounded-2xl p-6 md:p-8 mt-12">
    <h2 class="font-montserrat font-bold text-xl text-teal-dark">Apni gaadi ka insurance karwana hai?</h2>
    <p class="font-opensans text-[15px] text-slate-600 mt-2 leading-relaxed">
      Bike ho ya car - WhatsApp pe gaadi ka number bhejiye, hum quote nikaal kar bhej denge. Koi charge nahi.
    </p>
    <a href="${WHATSAPP}?text=Hi%20SafeDrive!%20I%20want%20a%20quote%20for%20my%20vehicle." target="_blank" rel="noopener noreferrer"
       class="inline-block mt-5 font-montserrat font-semibold text-[15px] text-white bg-coral px-7 py-3 rounded-full hover:bg-coral-hover transition-all duration-200">
      WhatsApp Pe Quote Lein
    </a>
  </aside>`;

const footerHtml = `
  <footer class="bg-teal-dark pt-14 pb-9 mt-16">
    <div class="max-w-[1100px] mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div>
          <div class="flex items-center gap-2.5 mb-3">
            <img src="/safedrive-logo.png" alt="SafeDrive Insurance Logo" class="w-10 h-10 object-contain rounded-lg bg-white p-0.5" width="40" height="40" />
            <span class="font-montserrat font-bold text-lg text-white">SafeDrive</span>
          </div>
          <p class="font-opensans text-sm text-white/70 mb-4">Ride ho jaaye sure!</p>
          <p class="font-opensans text-[13px] text-white/60 max-w-[280px] leading-relaxed">
            Gurgaon, Delhi-NCR &amp; Meerut mein trusted bike and car insurance. Authorized agent with Policybazaar.
          </p>
        </div>
        <div>
          <h2 class="font-montserrat font-semibold text-sm text-white uppercase tracking-wider mb-4">Quick Links</h2>
          <ul class="space-y-3">
            <li><a href="/" class="font-opensans text-sm text-white/70 hover:text-white">Home</a></li>
            <li><a href="/blog" class="font-opensans text-sm text-white/70 hover:text-white">Blog</a></li>
            <li><a href="/careers" class="font-opensans text-sm text-white/70 hover:text-white">Careers</a></li>
            <li><a href="/privacy" class="font-opensans text-sm text-white/70 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h2 class="font-montserrat font-semibold text-sm text-white uppercase tracking-wider mb-4">Contact</h2>
          <ul class="space-y-3">
            <li><a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" class="font-opensans text-sm text-white/70 hover:text-white">WhatsApp: +91 80770 80985</a></li>
            <li><a href="tel:+919899054206" class="font-opensans text-sm text-white/70 hover:text-white">Call: +91 98990 54206</a></li>
            <li><a href="mailto:contact@safedriveinsurance.in" class="font-opensans text-sm text-white/70 hover:text-white">contact@safedriveinsurance.in</a></li>
            <li class="font-opensans text-sm text-white/70">Gurgaon &bull; Delhi-NCR &bull; Meerut</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/15 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-opensans text-[13px] text-white/50">SafeDrive Insurance. All rights reserved.</p>
        <p class="font-opensans text-[13px] text-white/50">Authorized Insurance Agent with Policybazaar</p>
      </div>
    </div>
  </footer>`;

function pageShell({ title, description, canonical, ogImage, jsonLd, body }) {
  const image = ogImage || `${SITE}/hero-agent.jpg`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#0F766E" />

    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/favicon.svg" />

    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="SafeDrive Insurance" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta property="og:locale" content="en_IN" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    </script>
${jsonLd ? `    <script type="application/ld+json">\n${jsonLd}\n    </script>` : ''}
  </head>
  <body class="bg-white">
${body}
    <script type="module" src="/src/blog.ts"></script>
    <script src="https://console.authkey.io/js/main.js" id="authkey-chat-widget" widget-id="${CHAT_WIDGET_ID}" defer></script>
  </body>
</html>
`;
}

/* ------------------------------------------------------------------ build */

function readPosts() {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
      const { data, body } = parseFrontmatter(raw);
      const slug = (data.slug || file.replace(/\.md$/, ''))
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        category: data.category || '',
        image: data.image || '',
        imageAlt: data.imageAlt || data.title || '',
        draft: data.draft === true,
        date: formatDate(data.date || fs.statSync(path.join(CONTENT_DIR, file)).mtime),
        minutes: readingMinutes(body),
        html: marked.parse(body),
      };
    })
    .filter((p) => !p.draft && p.title)
    .sort((a, b) => (a.date.iso < b.date.iso ? 1 : -1));
}

function postPage(post) {
  const url = `${SITE}/blog/${post.slug}`;
  const ogImage = post.image ? `${SITE}${post.image}` : '';

  const jsonLd = `    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${escapeJson(post.title)}",
      "description": "${escapeJson(post.description)}",
      "datePublished": "${post.date.iso}",
      "dateModified": "${post.date.iso}",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "${url}" },${
        ogImage ? `\n      "image": "${ogImage}",` : ''
      }
      "author": { "@type": "Organization", "name": "SafeDrive Insurance", "url": "${SITE}/" },
      "publisher": {
        "@type": "Organization",
        "name": "SafeDrive Insurance",
        "url": "${SITE}/",
        "logo": { "@type": "ImageObject", "url": "${SITE}/safedrive-logo.png" }
      },
      "inLanguage": "en-IN"
    }`;

  const body = `${headerHtml}
    <main class="max-w-[820px] mx-auto px-4 md:px-6 pt-12 pb-4">
      <a href="/blog" class="font-montserrat font-semibold text-sm text-teal hover:underline">&larr; Sab posts</a>
      ${post.category ? `<p class="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal mt-6">${escapeHtml(post.category)}</p>` : ''}
      <h1 class="font-montserrat font-bold text-3xl md:text-[40px] leading-[1.2] text-teal-dark mt-3">${escapeHtml(post.title)}</h1>
      <p class="font-opensans text-sm text-slate-400 mt-3">
        <time datetime="${post.date.iso}">${post.date.display}</time> &bull; ${post.minutes} min read
      </p>
      ${post.description ? `<p class="font-opensans text-[17px] text-slate-500 mt-5 leading-relaxed">${escapeHtml(post.description)}</p>` : ''}
      ${post.image ? `<figure class="mt-8">${imageTag(post.image, post.imageAlt, { lazy: false, className: 'w-full rounded-2xl' })}</figure>` : ''}
      <article class="post-body mt-8">
${post.html}
      </article>
      ${ctaHtml}
    </main>
${footerHtml}`;

  return pageShell({
    title: `${post.title} | SafeDrive Insurance`,
    description: post.description || post.title,
    canonical: url,
    ogImage,
    jsonLd,
    body,
  });
}

function listingPage(posts) {
  const cards = posts.length
    ? posts
        .map(
          (p) => `
          <a href="/blog/${p.slug}" class="block border-2 border-teal/15 rounded-2xl overflow-hidden hover:border-teal/40 transition-colors duration-200">
            ${p.image ? `<div class="aspect-[16/9] overflow-hidden bg-mint">${imageTag(p.image, p.imageAlt, { width: 828, className: 'w-full h-full object-cover' })}</div>` : ''}
            <div class="p-6">
              ${p.category ? `<p class="font-montserrat font-semibold text-[11px] uppercase tracking-[0.12em] text-teal">${escapeHtml(p.category)}</p>` : ''}
              <h2 class="font-montserrat font-bold text-xl text-teal-dark mt-2 leading-snug">${escapeHtml(p.title)}</h2>
              ${p.description ? `<p class="font-opensans text-[15px] text-slate-500 mt-2 leading-relaxed">${escapeHtml(p.description)}</p>` : ''}
              <p class="font-opensans text-[13px] text-slate-400 mt-4">
                <time datetime="${p.date.iso}">${p.date.display}</time> &bull; ${p.minutes} min read
              </p>
            </div>
          </a>`
        )
        .join('\n')
    : `<p class="font-opensans text-slate-500">Abhi koi post nahi hai. Jaldi hi naya content aayega.</p>`;

  const body = `${headerHtml}
    <main class="max-w-[1100px] mx-auto px-4 md:px-6 pt-14 pb-6">
      <span class="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal">SafeDrive Blog</span>
      <h1 class="font-montserrat font-bold text-3xl md:text-[42px] leading-[1.2] text-teal-dark mt-3">
        Insurance Ki Baatein, Aasaan Bhasha Mein
      </h1>
      <p class="font-opensans text-lg text-slate-500 mt-4 max-w-[640px] leading-relaxed">
        Bike aur car insurance se judi khabrein, sawaal-jawab aur kaam ki jaankari - bina jargon ke.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
${cards}
      </div>
    </main>
${footerHtml}`;

  return pageShell({
    title: 'Blog | SafeDrive Insurance - Bike & Car Insurance Ki Jaankari',
    description:
      'Bike aur car insurance se judi khabrein, sawaalon ke jawab aur kaam ki jaankari - SafeDrive Insurance ke blog par, aasaan bhasha mein.',
    canonical: `${SITE}/blog`,
    jsonLd: null,
    body,
  });
}

function writeSitemap(posts) {
  const urls = [
    { loc: `${SITE}/`, priority: '1.0', changefreq: 'monthly', lastmod: '2026-08-09' },
    { loc: `${SITE}/blog`, priority: '0.8', changefreq: 'daily', lastmod: posts[0]?.date.iso || '2026-08-14' },
    { loc: `${SITE}/careers`, priority: '0.6', changefreq: 'monthly', lastmod: '2026-08-09' },
    { loc: `${SITE}/privacy`, priority: '0.3', changefreq: 'yearly', lastmod: '2026-08-14' },
    ...posts.map((p) => ({
      loc: `${SITE}/blog/${p.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: p.date.iso,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), xml, 'utf8');
}

function main() {
  const posts = readPosts();

  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), listingPage(posts), 'utf8');

  for (const post of posts) {
    const dir = path.join(OUT_DIR, post.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), postPage(post), 'utf8');
  }

  writeSitemap(posts);

  console.log(`[blog] ${posts.length} post(s) generated + sitemap updated`);
}

main();
