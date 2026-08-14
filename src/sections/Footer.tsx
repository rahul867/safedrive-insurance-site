import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '../config/contact';

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Claim Help', href: '#claim-help' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const cols = footerRef.current.querySelectorAll('.footer-col');
    gsap.from(cols, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Section links only exist on the homepage. On other pages (e.g. /careers)
    // fall through to a normal navigation back to the homepage anchor.
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      window.location.href = `/${href}`;
    }
  };

  return (
    <footer ref={footerRef} className="bg-teal-dark pt-16 md:pt-[72px] pb-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="footer-col">
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/safedrive-logo.png"
                alt="SafeDrive Insurance Logo"
                className="w-10 h-10 object-contain rounded-lg bg-white p-0.5 shadow-sm"
              />
              <span className="font-montserrat font-bold text-lg text-white">SafeDrive</span>
            </div>
            <p className="font-opensans text-sm text-white/70 mb-4">
              Ride ho jaaye sure!
            </p>
            <p className="font-opensans text-[13px] text-white/60 max-w-[280px] leading-relaxed">
              Gurgaon, Delhi-NCR & Meerut mein trusted bike and car insurance. Authorized agent with Policybazaar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="font-montserrat font-semibold text-sm text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-opensans text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/blog"
                  className="font-opensans text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="font-opensans text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="font-opensans text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="font-montserrat font-semibold text-sm text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-opensans text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.callHref}
                  className="flex items-center gap-2 font-opensans text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Call: {contact.callDisplay}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@safedriveinsurance.in"
                  className="flex items-center gap-2 font-opensans text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  contact@safedriveinsurance.in
                </a>
              </li>
              <li className="flex items-center gap-2 font-opensans text-sm text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Gurgaon • Delhi-NCR • Meerut
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-opensans text-[13px] text-white/50">
            SafeDrive Insurance. All rights reserved.
          </p>
          <p className="font-opensans text-[13px] text-white/50">
            Authorized Insurance Agent with Policybazaar
          </p>
        </div>
      </div>
    </footer>
  );
}
