import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'Online portal pe khud form bharte waqt hamesha darr lagta tha ki galat info fill ho gayi toh claim fas jaayega. SafeDrive ne RC dekhkar 5 min mein verified policy bhej di!',
    name: 'Rahul S.',
    location: 'Gurgaon',
  },
  {
    quote: 'Meri bike ka Meerut mein accident hua tha. SafeDrive se policy thi toh surveyor ne ek sawal nahi kiya, seedha cashless repair mila. 100% genuine!',
    name: 'Sneha R.',
    location: 'Meerut',
  },
  {
    quote: 'Ghar baithe baithe sirf WhatsApp pe photo bheji aur 5 minute mein original policy mil gayi. Na koi lambe form, na koi call center ka chakkar.',
    name: 'Vikram T.',
    location: 'Delhi-NCR',
  },
  {
    quote: 'Pehle dealer se mehnge mein leta tha. Inhone showroom se 30% saste mein wahi same company ka Zero Dep cover ghar baithe arrange karwa diya.',
    name: 'Amit K.',
    location: 'Noida',
  },
  {
    quote: 'Previous NCB verify karke pura 50% discount dilwaya. Agar online khud karta toh galti se zero NCB ho jaata aur 6,000 ka nuksan hota.',
    name: 'Priya M.',
    location: 'Delhi',
  },
  {
    quote: 'Office se nikalte time message kiya, 5 minute mein policy WhatsApp pe aa gayi. Superfast aur reliable service!',
    name: 'Neha B.',
    location: 'Faridabad',
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.1,
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
    <section id="reviews" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="section-heading">
          <SectionHeading
            label="REVIEWS"
            title="5,000+ Happy Vehicle Owners"
            body="Ghar baithe 5 minute mein verified policy aur zero claim rejection guarantee — padhiye Gurgaon, Delhi-NCR aur Meerut ke customers ka real experience."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="bg-slate-50 rounded-xl p-7 transition-all duration-250 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="font-opensans text-[15px] text-slate-700 leading-relaxed italic mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center">
                  <span className="font-montserrat font-semibold text-sm text-teal">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-sm text-teal-dark">{t.name}</p>
                  <p className="font-opensans text-[13px] text-slate-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
