import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TiltCard from '../components/TiltCard';
import { contact, getWhatsAppQuoteUrl } from '../config/contact';

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
      className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(20, 184, 166, 0.08) 0%, transparent 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6 py-24 md:py-0 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div ref={textRef} className="w-full md:w-1/2 md:max-w-[520px] text-center md:text-left z-20">
          <span className="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-4 block">
            SAFEDRIVE INSURANCE
          </span>

          <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-[1.1] text-teal-dark">
            Bike & Car Insurance
            <br />
            <span className="text-teal">Jo Minutes Mein Mile,</span>
            <br />
            Days Mein Nahi!
          </h1>

          <p className="font-opensans text-lg text-slate-500 mt-6 max-w-[440px] mx-auto md:mx-0 leading-relaxed">
            Third Party se Zero Dep tak — Gurgaon, Delhi-NCR & Meerut mein instant policy with claim assistance.
          </p>

          <a
            href={getWhatsAppQuoteUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 font-montserrat font-semibold text-[15px] text-white bg-coral px-8 py-3.5 rounded-full hover:bg-coral-hover hover:scale-[1.03] transition-all duration-200"
          >
            WhatsApp pe Quote Lein
          </a>

          <p className="text-[13px] text-slate-400 mt-4">
            Ya call karein:{' '}
            <a href={contact.callHref} className="text-teal hover:underline">
              {contact.callDisplay}
            </a>
          </p>
        </div>

        {/* 3D Tilt Card - Desktop */}
        <div className="hidden md:block md:w-1/2">
          <TiltCard />
        </div>
      </div>

      {/* Mobile Card */}
      <div className="md:hidden w-full flex justify-center pb-16">
        <TiltCard />
      </div>
    </section>
  );
}
