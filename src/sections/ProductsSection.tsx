import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Car, Bike, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { getWhatsAppQuoteUrl } from '../config/contact';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    icon: Shield,
    title: 'Third Party',
    subtitle: '(TP)',
    price: 'Sabse kam premium',
    bestFor: 'Purani gaadi ya sirf legal requirement poori karni ho',
    description: 'Legal requirement - doosri gaadi ya insaan ko hua nuksaan cover karta hai. Sabse affordable option.',
    popular: false,
  },
  {
    icon: Car,
    title: 'Comprehensive',
    subtitle: '',
    price: 'Sabse zyada choose kiya jaane wala',
    bestFor: '3-8 saal purani gaadi, daily use',
    description: 'Aapki gaadi + third party dono covered. Theft, accident, natural disaster - sab included. Best value for money.',
    popular: true,
  },
  {
    icon: Bike,
    title: 'Zero Dep',
    subtitle: '',
    price: 'Full claim, bina katauti',
    bestFor: 'Nayi gaadi (0-5 saal) ya premium model',
    description: 'Comprehensive ka super version - depreciation ke bina full claim amount milega. New car owners ke liye best.',
    popular: false,
  },
];

export default function ProductsSection() {
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
        duration: 0.7,
        delay: i * 0.15,
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
    <section id="products" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="section-heading">
          <SectionHeading
            label="HUMARE COVERS"
            title="3 Plans - Sabke Liye Kuch"
            body="Bike ho ya Car, TP se lekar Zero Dep tak - choose karo jo aapke budget aur safety needs ko suit kare."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                ref={(el) => { if (el) cardsRef.current[i] = el; }}
                className={`relative bg-mint rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover ${
                  product.popular
                    ? 'border-2 border-teal'
                    : 'border border-teal/20'
                }`}
              >
                {product.popular && (
                  <span className="absolute -top-3 right-4 bg-coral text-white text-[10px] font-montserrat font-semibold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </span>
                )}

                <div className="w-14 h-14 bg-teal rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="font-montserrat font-bold text-[22px] text-teal-dark">
                  {product.title}
                </h3>
                {product.subtitle && (
                  <span className="text-sm text-slate-400 font-montserrat">{product.subtitle}</span>
                )}

                <p className="font-montserrat font-bold text-lg text-teal mt-3">
                  {product.price}
                </p>

                <p className="font-opensans text-[13px] text-slate-400 mt-2">
                  <span className="font-semibold text-slate-500">Kiske liye sahi hai: </span>
                  {product.bestFor}
                </p>

                <p className="font-opensans text-[15px] text-slate-500 leading-relaxed mt-4">
                  {product.description}
                </p>

                <a
                  href={getWhatsAppQuoteUrl(`Hi SafeDrive! I want a quote for ${product.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-6 font-montserrat font-semibold text-sm px-6 py-2.5 rounded-full border-2 transition-all duration-200 ${
                    product.popular
                      ? 'bg-teal text-white border-teal hover:bg-teal-dark'
                      : 'text-teal border-teal hover:bg-teal hover:text-white'
                  }`}
                >
                  Ispe Quote Lein
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
