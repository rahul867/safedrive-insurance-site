import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TiltCard from '../components/TiltCard';
import { contact, getWhatsAppQuoteUrl } from '../config/contact';
import { ShieldCheck, Zap, Award, Phone, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    const children = textRef.current.children;
    // fromTo (not from) so content always ends visible even if the
    // animation is interrupted or rAF is throttled in a background tab.
    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.3,
        clearProps: 'opacity,transform',
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92dvh] flex items-center bg-white overflow-hidden pt-[72px]"
      style={{
        background:
          'radial-gradient(circle at 18% 30%, rgba(20, 184, 166, 0.08) 0%, transparent 45%), radial-gradient(circle at 82% 45%, rgba(20, 184, 166, 0.08) 0%, transparent 45%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6 py-10 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Left Column: Text & Trust Anchors */}
        <div ref={textRef} className="w-full max-w-[580px] lg:flex-[1.15] text-center lg:text-left z-20">
          <div className="inline-flex max-w-full items-center gap-2 px-3.5 py-2 rounded-full bg-teal/10 border border-teal/20 text-teal text-[10px] sm:text-[11px] font-bold uppercase tracking-wide leading-relaxed mb-6">
            <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
            <span>Top-Rated Motor Advisory &bull; Protect Your Vehicle Today</span>
          </div>

          <h1 className="font-montserrat font-bold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.18] tracking-tight text-teal-dark">
            <span className="block">Car &amp; Bike Insurance.</span>
            <span className="block mt-2 text-teal">Policy in 5 minutes.</span>
          </h1>

          <p className="font-opensans text-base sm:text-lg text-slate-600 mt-6 leading-relaxed max-w-[510px] mx-auto lg:mx-0">
            Compare 15+ insurers with RC-verified policy details, personal claim support, and cashless garage assistance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5">
            <a
              href={getWhatsAppQuoteUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm text-white bg-coral px-7 py-3.5 rounded-full hover:bg-coral-hover hover:scale-[1.02] shadow-lg transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              Get WhatsApp Quote
            </a>

            <a
              href={contact.callHref}
              className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-teal-dark bg-mint/50 border border-teal/20 px-6 py-3.5 rounded-full hover:bg-mint transition-all duration-200"
            >
              <Phone className="w-4 h-4 shrink-0 text-teal" />
              Call for a Quote
            </a>
          </div>

          {/* Micro Trust Stats to visually ground the left side */}
          <div className="mt-8 pt-6 border-t border-teal/15 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-montserrat font-bold text-xs text-teal-dark leading-tight">5,000+</span>
                <span className="block font-opensans text-[11px] text-slate-500 leading-tight">Happy Drivers</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-montserrat font-bold text-xs text-teal-dark leading-tight">15+ Insurers</span>
                <span className="block font-opensans text-[11px] text-slate-500 leading-tight">5-Min Delivery</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block font-montserrat font-bold text-xs text-teal-dark leading-tight">100% Claim Safe</span>
                <span className="block font-opensans text-[11px] text-slate-500 leading-tight">RC-Verified Policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Tilt Card centered within its 50% width */}
        <div className="w-full lg:flex-1 min-w-0 flex items-center justify-center relative py-4 lg:py-0">
          <TiltCard />
        </div>
      </div>
    </section>
  );
}
