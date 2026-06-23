import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Details Share Karein',
    description: 'WhatsApp pe apna vehicle number, city, aur insurance type bhejein.',
  },
  {
    number: '02',
    title: 'Instant Quote Milega',
    description: '2 minutes mein aapko best premium options mil jaayenge \u2014 compare karein aur choose karein.',
  },
  {
    number: '03',
    title: 'Payment Karein',
    description: 'Secure online payment karein \u2014 receipt instant mil jaayegi. Koi hidden charges nahi.',
  },
  {
    number: '04',
    title: 'Policy Delivered!',
    description: 'Minutes mein policy document aapke WhatsApp pe \u2014 original, verifiable, ready to use.',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const heading = sectionRef.current.querySelector('.section-heading');
    if (heading) {
      gsap.from(heading, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    stepsRef.current.forEach((step, i) => {
      if (!step) return;
      gsap.from(step, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: i * 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-mint">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="section-heading">
          <SectionHeading
            label="PROCESS"
            title="4 Steps Mein Policy Ready"
            body="Itna easy hai ki aapko sochna nahi parega \u2014 bas details do, quote lo, policy lo!"
          />
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative mt-16">
          {/* Connecting Line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-teal/30" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { if (el) stepsRef.current[i] = el; }}
                className="text-center relative"
              >
                {/* Node */}
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-md">
                  <span className="font-montserrat font-bold text-lg text-white">{step.number}</span>
                </div>

                <h3 className="font-montserrat font-bold text-lg text-teal-dark mb-3">
                  {step.title}
                </h3>
                <p className="font-opensans text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden relative mt-12 pl-8">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal/30" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { if (el) stepsRef.current[i + 4] = el; }}
                className="relative"
              >
                {/* Node */}
                <div className="absolute -left-8 top-0 w-8 h-8 bg-teal rounded-full flex items-center justify-center z-10">
                  <span className="font-montserrat font-bold text-xs text-white">{step.number}</span>
                </div>

                <h3 className="font-montserrat font-bold text-lg text-teal-dark mb-2">
                  {step.title}
                </h3>
                <p className="font-opensans text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20SafeDrive!%20I%20want%20a%20quote%20for%20my%20vehicle."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-montserrat font-semibold text-[15px] text-white bg-teal px-8 py-3.5 rounded-full hover:bg-teal-hover hover:scale-[1.03] transition-all duration-200"
          >
            Abhi Shuru Karein
          </a>
        </div>
      </div>
    </section>
  );
}
