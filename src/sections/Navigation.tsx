import { useEffect, useRef, useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import gsap from 'gsap';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Claim Help', href: '#claim-help' },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: 'power2.out',
        delay: 0.2,
      });
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-white/80 backdrop-blur-xl border-b border-teal/15"
    >
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-teal" strokeWidth={2} />
          <div className="flex flex-col">
            <span className="font-montserrat font-bold text-lg text-teal-dark leading-tight">SafeDrive</span>
            <span className="font-opensans text-[11px] text-slate-400 leading-tight">Ride ho jaaye sure!</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-montserrat font-semibold text-sm text-ink hover:text-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20SafeDrive!%20I%20want%20a%20quote%20for%20my%20vehicle."
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat font-semibold text-sm text-white bg-teal px-6 py-2.5 rounded-full hover:bg-teal-hover hover:scale-[1.02] transition-all duration-200 inline-block"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-teal/15 shadow-lg">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-montserrat font-semibold text-sm text-ink hover:text-teal py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20SafeDrive!%20I%20want%20a%20quote%20for%20my%20vehicle."
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat font-semibold text-sm text-white bg-teal px-6 py-3 rounded-full text-center mt-2"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
