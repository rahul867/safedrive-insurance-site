import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, MessageCircle, Mail, MapPin } from 'lucide-react';

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
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="bg-teal-dark pt-16 md:pt-[72px] pb-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="footer-col">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-8 h-8 text-white" strokeWidth={2} />
              <span className="font-montserrat font-bold text-lg text-white">SafeDrive</span>
            </div>
            <p className="font-opensans text-sm text-white/70 mb-4">
              Ride ho jaaye sure!
            </p>
            <p className="font-opensans text-[13px] text-white/60 max-w-[280px] leading-relaxed">
              Gurgaon, Delhi-NCR & Meerut mein trusted bike and car insurance. POSP — Policybazaar.
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
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-opensans text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  +91-XXXXXXXXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@safedrive.in"
                  className="flex items-center gap-2 font-opensans text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  contact@safedrive.in
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
            POSP under Policybazaar
          </p>
        </div>
      </div>
    </footer>
  );
}
