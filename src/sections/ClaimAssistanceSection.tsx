import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Phone } from 'lucide-react';
import { contact } from '../config/contact';

gsap.registerPlugin(ScrollTrigger);

const features = [
  '24/7 claim support call',
  'Document preparation help',
  'Garage coordination - cashless network',
  'Follow-up till settlement',
];

export default function ClaimAssistanceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (leftRef.current) {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (rightRef.current) {
      gsap.from(rightRef.current, {
        opacity: 0,
        x: 30,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="claim-help" ref={sectionRef} className="py-24 bg-mint">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div ref={leftRef} className="w-full md:w-[55%] order-2 md:order-1">
            <span className="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-4 block">
              CLAIM SUPPORT
            </span>

            <h2 className="font-montserrat font-bold text-3xl md:text-4xl leading-tight text-teal-dark">
              Accident Hua?
              <br />
              <span className="text-teal">Hum Hain Na!</span>
            </h2>

            <p className="font-opensans text-base text-slate-500 leading-relaxed mt-4">
              Insurance sirf policy kharidna nahi - claim time pe kaam aata hai. SafeDrive provides full claim assistance: documents se lekar garage coordination tak.
            </p>

            <ul className="mt-6 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-opensans font-medium text-[15px] text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={contact.callHref}
              className="inline-flex items-center gap-2 mt-8 font-montserrat font-semibold text-[15px] text-white bg-coral px-8 py-3.5 rounded-full hover:bg-coral-hover hover:scale-[1.03] transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Claim Ke Liye Call Karein
            </a>
          </div>

          {/* Image */}
          <div ref={rightRef} className="w-full md:w-[45%] order-1 md:order-2">
            <img
              src="/claim-support.jpg"
              alt="Insurance claim support - WhatsApp chat, car keys, and claim form"
              className="w-full h-auto rounded-2xl shadow-card"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
