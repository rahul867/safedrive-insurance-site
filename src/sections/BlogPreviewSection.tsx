import { BookOpen, ArrowRight, ShieldCheck, AlertTriangle, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const featuredArticles = [
  {
    slug: 'car-insurance-gurgaon-delhi-ncr',
    tag: 'Gurgaon & NCR',
    icon: MapPin,
    title: 'Car & Bike Insurance in Gurgaon & Delhi-NCR: Cashless Garages',
    description: '500+ cashless network garages, local RTO compliance, aur WhatsApp par 2 minute mein policy delivery.',
    readTime: '3 min read',
  },
  {
    slug: 'bike-insurance-expire-ho-gaya',
    tag: 'Urgent Guide',
    icon: AlertTriangle,
    title: 'Bike Insurance Expire Ho Gaya? 90 Din Ka NCB Rule',
    description: 'Policy date nikal gayi? Jaaniye 50% tak NCB discount kaise bachega aur bina inspection kaise renew hoga.',
    readTime: '4 min read',
  },
  {
    slug: 'zero-depreciation-car-insurance-meaning-benefits',
    tag: 'Policy Guide',
    icon: ShieldCheck,
    title: 'Zero Dep Car Insurance Kya Hota Hai? Bumper to Bumper Ke Fayde',
    description: 'Plastic aur bumper parts par 50% katauti se bachiye. Real claim calculation aur cost comparison.',
    readTime: '4 min read',
  },
  {
    slug: 'third-party-bike-insurance-price-challan-rules',
    tag: 'Price Chart 2026',
    icon: BookOpen,
    title: 'Third Party Bike Insurance Price List 2026 & Fine',
    description: 'IRDAI official rate chart: 75cc se 350cc+ rates, ₹2,000 traffic fine se bachne ka tarika.',
    readTime: '3 min read',
  },
];

export default function BlogPreviewSection() {
  return (
    <section id="guides" className="py-20 md:py-24 bg-mint/30">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <SectionHeading
              label="KAAM KI BAAT"
              title="Insurance Ki Samajh, Aasaan Bhasha Mein"
              body="Niyam, renewal rules, fines aur claim process — bina kisi jargon ya complex english ke."
            />
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 font-montserrat font-semibold text-sm text-teal hover:text-teal-dark hover:underline transition-colors"
            >
              Sabhi 7+ Guides Padhein
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article) => {
            const Icon = article.icon;
            return (
              <a
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col justify-between p-6 bg-white rounded-2xl border border-teal/15 hover:border-teal/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-teal/10 text-teal">
                      <Icon className="w-3.5 h-3.5" />
                      {article.tag}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">{article.readTime}</span>
                  </div>

                  <h3 className="font-montserrat font-bold text-base text-teal-dark group-hover:text-teal transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="font-opensans text-[13px] text-slate-500 mt-2.5 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-teal group-hover:translate-x-1 transition-transform">
                  Pura padhein &rarr;
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="font-opensans text-sm text-slate-500">
            Koi sawaal hai ya gaadi ka quote nikalwana hai?{' '}
            <a
              href="https://wa.me/918077080985?text=Hi%20SafeDrive!%20Mujhe%20insurance%20ke%20bare%20me%20jaanna%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal hover:underline"
            >
              WhatsApp par direct Rahul se baat karein (+91 80770 80985)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
