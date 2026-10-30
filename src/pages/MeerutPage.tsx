import { useState } from 'react';
import {
  Shield,
  Car,
  CheckCircle2,
  MapPin,
  AlertTriangle,
  Phone,
  MessageCircle,
  ChevronDown,
  Wrench,
  Sparkles,
} from 'lucide-react';
import Footer from '../sections/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { contact, getWhatsAppQuoteUrl } from '../config/contact';

const meerutPlans = [
  {
    icon: Shield,
    title: 'Third Party (TP)',
    subtitle: 'UP-15 Legal Requirement',
    price: '₹843 / saal se shuru (100-150cc)',
    highlight: 'Traffic Challan Se Bachiye',
    description: 'Meerut intersection cameras aur police checking mein ₹2,000 fine se bachiye. Doosre vyakti ya gaadi ka nuksan 100% cover.',
    bestFor: 'Purani bikes (Splendor, Platina) ya commercial delivery vehicles',
    features: ['Instant WhatsApp delivery in 2 mins', 'No inspection required ever', 'VAHAN portal par turant sync'],
  },
  {
    icon: Car,
    title: 'Comprehensive Package',
    subtitle: 'Own Damage + Third Party',
    price: 'Best value comparison',
    highlight: 'Sabse Zyada Popular',
    description: 'Delhi-Meerut Expressway aur highway travel ke liye zaroori cover. Theft, accident, fire aur flood damages sab covered.',
    bestFor: '3-8 saal purani family cars (Swift, WagonR, i10, Baleno)',
    features: ['Chori aur fire cover included', '50% tak No Claim Bonus discount', 'Cashless garage pan-Meerut'],
  },
  {
    icon: Sparkles,
    title: 'Zero Depreciation',
    subtitle: 'Bumper to Bumper (Nil Dep)',
    price: 'Full claim bina katauti',
    highlight: 'Nayi Gaadiyon Ke Liye',
    description: 'Plastic bumper, fiber parts aur headlights par 50% deduction nahi hoga. Workshop se gaadi bina extra jeb se paise diye nikalwayein.',
    bestFor: 'Nayi cars (0-5 saal: Brezza, Creta, Nexon, Dzire)',
    features: ['0% cut on plastic & fiber parts', 'Glass & metal full compensation', 'Fast cashless claim approval'],
  },
];

const meerutGarages = [
  {
    area: 'Delhi Road & Partapur Corridor',
    garages: 'Maruti Suzuki Arena, Hyundai Motor Care, Tata Motors Authorized, Mahindra Workshop',
    desc: 'Expressway exit aur Partapur industrial area ke paas major workshops par cashless tie-ups.',
  },
  {
    area: 'Garh Road & Shastri Nagar',
    garages: 'Bajaj Showroom Workshops, Honda Two-Wheeler Care, Multi-brand Bosch Service Points',
    desc: 'Central Meerut aur residential areas ke nazdeek quick inspection aur accidental repairs.',
  },
  {
    area: 'Mawana Road & Begum Bridge',
    garages: 'Hero MotoCorp Authorized, TVS Service Centers, Local Body Repair Hubs',
    desc: 'Two-wheeler accidental claims aur body repair mein priority surveyor clearance.',
  },
];

const faqs = [
  {
    q: 'Meerut (UP-15) mein bike insurance WhatsApp se kaise renew hota hai?',
    a: 'Aapko kisi office nahi aana. Sirf apni gaadi ki RC photo hamare WhatsApp (+91 80770 80985) par bhejiye. Hum Tata AIG, Bajaj Allianz aur ICICI Lombard ke lowest quotes bhejte hain, payment karte hi 2 minute mein policy PDF aapko mil jaati hai.',
  },
  {
    q: 'Agar Meerut mein policy expire hue 3-4 mahine ho gaye to kya hoga?',
    a: 'Agar 90 din se zyada ho gaye hain to hum aapko self-inspection video link bhejenge. Aap apne phone se gaadi ki photo click karke upload karenge aur 30 minute ke andar policy approve ho jaayegi.',
  },
  {
    q: 'Meerut mein accident hone par cashless claim kaise milega?',
    a: 'Accident spot se turant hamare number (+91 80770 80985) par WhatsApp karein. Hum aapke nazdeek sabse best authorized cashless workshop ka intimation book karke surveyor documentation coordinate karte hain.',
  },
  {
    q: 'Kya SafeDrive par Policybazaar se saste rates mil sakte hain?',
    a: 'SafeDrive authorized agent hai jo 15+ top general insurers se direct compare karta hai. Hum bina kisi automated telecaller harassment ke aapko best discount aur personalized claim guidance dete hain.',
  },
];

export default function MeerutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 h-[72px] bg-white/95 backdrop-blur-xl border-b border-teal/15">
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/safedrive-logo.png" alt="SafeDrive Insurance Logo" className="w-10 h-10 object-contain rounded-lg shadow-sm" />
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-lg text-teal-dark leading-tight">SafeDrive</span>
              <span className="font-opensans text-[11px] text-slate-400 leading-tight">Meerut &bull; UP-15 Hub</span>
            </div>
          </a>
          <nav className="flex items-center gap-4">
            <a href="/" className="font-montserrat font-semibold text-sm text-teal hover:underline hidden sm:inline">Home</a>
            <a href="/blog" className="font-montserrat font-semibold text-sm text-teal hover:underline">Guides</a>
            <a
              href={getWhatsAppQuoteUrl('Hi Rahul! I am in Meerut and want a vehicle insurance quote.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-montserrat font-semibold text-xs md:text-sm text-white bg-coral px-4 md:px-5 py-2 md:py-2.5 rounded-full hover:bg-coral-hover transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Quote
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:py-24 bg-gradient-to-b from-teal/10 via-mint/20 to-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/15 text-teal text-xs font-bold uppercase tracking-wider mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Meerut (UP-15) Authorized Motor Advisory
            </div>

            <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-teal-dark leading-[1.15]">
              Bike Aur Car Insurance <br />
              <span className="text-teal">Jo Meerut Mein Minutes Mein Mile!</span>
            </h1>

            <p className="font-opensans text-base md:text-lg text-slate-600 mt-5 leading-relaxed">
              Delhi Road, Garh Road, Shastri Nagar, Mawana Road ya Kankerkhera — Meerut ke vehicle owners ke liye transparent motor insurance. 15+ top companies ke lowest rates, 2 minute mein digital policy aur local cashless claim support.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppQuoteUrl('Hi Rahul! Mujhe Meerut me apni gaadi ka insurance quote chahiye.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-base text-white bg-coral px-8 py-4 rounded-full hover:bg-coral-hover shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Pe Instant Quote Lein
              </a>
              <a
                href={contact.callHref}
                className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-base text-teal-dark bg-white border-2 border-teal/30 px-7 py-4 rounded-full hover:border-teal hover:bg-teal/5 transition-all"
              >
                <Phone className="w-5 h-5 text-teal" />
                Direct Call: {contact.callDisplay}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-slate-500 flex-wrap">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                IRDAI / VAHAN Portal Instant Sync
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                No Agent Inspection Under 90 Days
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                50% Tak NCB Transfer Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intent 1: Plans Tailored for Meerut */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal block mb-2">
              MEERUT MOTOR PLANS
            </span>
            <h2 className="font-montserrat font-bold text-2xl md:text-4xl text-teal-dark leading-tight">
              Aapki Gaadi Ke Liye Kaunsa Plan Sahi Hai?
            </h2>
            <p className="font-opensans text-slate-500 text-sm md:text-base mt-3">
              Challan se bachne ke Third Party cover se lekar Zero Dep bumper-to-bumper protection tak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meerutPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.title}
                  className="flex flex-col justify-between p-7 rounded-2xl border-2 border-teal/15 hover:border-teal/50 bg-gradient-to-b from-white to-mint/10 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal/15 text-teal uppercase tracking-wide">
                        {plan.highlight}
                      </span>
                    </div>

                    <h3 className="font-montserrat font-bold text-2xl text-teal-dark">{plan.title}</h3>
                    <p className="font-opensans text-xs text-slate-400 mt-0.5">{plan.subtitle}</p>

                    <div className="my-4 p-3 bg-mint/40 rounded-xl">
                      <span className="font-montserrat font-bold text-sm text-teal-dark">{plan.price}</span>
                    </div>

                    <p className="font-opensans text-sm text-slate-600 leading-relaxed mb-4">
                      {plan.description}
                    </p>

                    <p className="font-opensans text-xs font-semibold text-slate-700 mb-4 bg-teal/5 p-2 rounded-lg">
                      Best For: <span className="font-normal text-slate-600">{plan.bestFor}</span>
                    </p>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={getWhatsAppQuoteUrl(`Hi Rahul! Mujhe Meerut me ${plan.title} plan ka quote chahiye.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-montserrat font-semibold text-sm text-teal hover:text-white bg-teal/10 hover:bg-teal py-3 rounded-xl transition-all"
                  >
                    Iska Quote WhatsApp Karein &rarr;
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intent 2: Expired Policy Renewal & 90-Day NCB Protection */}
      <section className="py-16 md:py-20 bg-mint/30 border-y border-teal/15">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-teal/20 shadow-sm flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-3/5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-coral/10 text-coral uppercase tracking-wider mb-4">
                <AlertTriangle className="w-4 h-4" />
                Problem Solving Hub &bull; Meerut
              </span>

              <h2 className="font-montserrat font-bold text-2xl md:text-4xl text-teal-dark leading-snug">
                Policy Expire Ho Gayi? <br />
                Meerut Mein 90 Din Ka Rule Aur Instant Renewal
              </h2>

              <p className="font-opensans text-slate-600 text-base mt-4 leading-relaxed">
                Agar aapki car ya bike ka insurance khatam ho gaya hai, to panic hone ki zaroorat nahi hai. IRDAI ke niyam ke tehat:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-mint/50 border border-teal/15">
                  <h4 className="font-montserrat font-bold text-sm text-teal-dark">Expiry &le; 90 Days</h4>
                  <p className="font-opensans text-xs text-slate-600 mt-1">
                    Bina inspection ke instant renew. Aapka <strong>20% se 50% No Claim Bonus (NCB) safe</strong> rahega.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-mint/50 border border-teal/15">
                  <h4 className="font-montserrat font-bold text-sm text-teal-dark">Expiry &gt; 90 Days</h4>
                  <p className="font-opensans text-xs text-slate-600 mt-1">
                    Simple smartphone self-inspection video link. 30 minute mein approval aur lowest available market quotes.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <a
                  href={getWhatsAppQuoteUrl('Hi Rahul! Meri gaadi ki policy expire ho gayi hai, mujhe Meerut me renew karwani hai.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-montserrat font-semibold text-sm text-white bg-coral px-6 py-3.5 rounded-full hover:bg-coral-hover transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Expired Policy Turant Renew Karein
                </a>
                <span className="text-xs text-slate-500 font-medium">Sirf RC photo bhejiye</span>
              </div>
            </div>

            <div className="w-full lg:w-2/5 bg-gradient-to-br from-teal-dark to-teal text-white p-6 md:p-8 rounded-2xl">
              <h3 className="font-montserrat font-bold text-xl mb-4">Renewal Ke Liye Kya Chahiye?</h3>
              <ul className="space-y-3.5 text-sm font-opensans text-white/90">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                  <span>Gaadi ki RC (Registration Certificate) ki front & back photo</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                  <span>Purani policy copy (agar available ho, bonus proof ke liye)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                  <span>Owner ka Aadhaar ya PAN (standard KYC)</span>
                </li>
              </ul>
              <div className="mt-6 pt-5 border-t border-white/20 text-xs text-white/70">
                Hum 2 minute mein sabhi companies ke quotes compare karke WhatsApp kar dete hain.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intent 3: Cashless Garages Across Meerut */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal block mb-2">
              LOCAL NETWORK SUPPORT
            </span>
            <h2 className="font-montserrat font-bold text-2xl md:text-4xl text-teal-dark leading-tight">
              Cashless Garages Across Meerut (UP-15)
            </h2>
            <p className="font-opensans text-slate-500 text-sm md:text-base mt-3">
              Accident hone par jeb se lakho rupaye mat bhariye. Meerut ke in corridors par cashless claim pass karwayein.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {meerutGarages.map((loc) => (
              <div key={loc.area} className="p-6 rounded-2xl border border-teal/15 bg-mint/20 hover:border-teal/40 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-5 h-5 text-teal" />
                  <h3 className="font-montserrat font-bold text-lg text-teal-dark">{loc.area}</h3>
                </div>
                <p className="font-opensans text-xs font-semibold text-teal-dark bg-white p-2.5 rounded-lg border border-teal/10 mb-3">
                  {loc.garages}
                </p>
                <p className="font-opensans text-xs text-slate-600 leading-relaxed">
                  {loc.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-6 bg-teal/5 rounded-2xl max-w-2xl mx-auto">
            <h4 className="font-montserrat font-bold text-base text-teal-dark">Meerut Claim Helpline</h4>
            <p className="font-opensans text-xs text-slate-600 mt-1">
              Accident hote hi pehle WhatsApp karein: <strong>+91 80770 80985</strong>. Hum nearest garage coordinate karenge aur surveyor se approval dilwayenge.
            </p>
          </div>
        </div>
      </section>

      {/* Local Guides Section */}
      <section className="py-16 bg-mint/30 border-t border-teal/15">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div>
              <span className="font-montserrat font-semibold text-xs uppercase tracking-wider text-teal">ZAROORI JAANKARI</span>
              <h2 className="font-montserrat font-bold text-2xl text-teal-dark mt-1">Meerut Motor Insurance Guides</h2>
            </div>
            <a href="/blog" className="text-sm font-semibold text-teal hover:underline mt-2 sm:mt-0">
              Sabhi guides dekhein &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="/blog/bike-car-insurance-agent-meerut"
              className="p-5 bg-white rounded-xl border border-teal/15 hover:border-teal/50 transition-all group"
            >
              <span className="text-[10px] font-bold text-teal uppercase tracking-wider">Meerut Guide</span>
              <h3 className="font-montserrat font-bold text-base text-teal-dark group-hover:text-teal mt-1">
                Bike & Car Insurance in Meerut (UP-15): Lowest Premium Quotes
              </h3>
              <p className="font-opensans text-xs text-slate-500 mt-2 line-clamp-2">
                Garh Road, Delhi Road aur Shastri Nagar vehicle owners ke liye complete guide.
              </p>
            </a>

            <a
              href="/blog/third-party-bike-insurance-price-challan-rules"
              className="p-5 bg-white rounded-xl border border-teal/15 hover:border-teal/50 transition-all group"
            >
              <span className="text-[10px] font-bold text-teal uppercase tracking-wider">Rate Chart 2026</span>
              <h3 className="font-montserrat font-bold text-base text-teal-dark group-hover:text-teal mt-1">
                Third Party Bike Insurance Price List 2026 & Fine
              </h3>
              <p className="font-opensans text-xs text-slate-500 mt-2 line-clamp-2">
                75cc se 350cc+ engine capacity ka premium aur ₹2,000 challan se bachne ka tarika.
              </p>
            </a>

            <a
              href="/blog/zero-depreciation-car-insurance-meaning-benefits"
              className="p-5 bg-white rounded-xl border border-teal/15 hover:border-teal/50 transition-all group"
            >
              <span className="text-[10px] font-bold text-teal uppercase tracking-wider">Zero Dep Guide</span>
              <h3 className="font-montserrat font-bold text-base text-teal-dark group-hover:text-teal mt-1">
                Zero Depreciation (Zero Dep) Car Insurance Kya Hota Hai?
              </h3>
              <p className="font-opensans text-xs text-slate-500 mt-2 line-clamp-2">
                Plastic aur bumper par 50% katauti se bachiye. Real claim payout calculations.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal block mb-2">
              MEERUT FAQ
            </span>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              Aksar Pooche Jaane Wale Sawaal
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="border border-teal/15 rounded-xl overflow-hidden bg-mint/10">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-montserrat font-bold text-sm md:text-base text-teal-dark hover:text-teal transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-teal transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 font-opensans text-sm text-slate-600 leading-relaxed border-t border-teal/10 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Local CTA */}
      <section className="py-14 bg-gradient-to-r from-teal-dark to-teal text-white text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl">
            Meerut Mein Apni Gaadi Ka Best Quote Abhi Paayein
          </h2>
          <p className="font-opensans text-white/80 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Kisi agent ke office ke chakkar mat kaatiye. WhatsApp par gaadi ka number bhejiye, hum 2 minute mein policy provide karenge.
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
            <a
              href={getWhatsAppQuoteUrl('Hi Rahul! Mujhe Meerut me apni gaadi ka insurance quote chahiye.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-montserrat font-semibold text-base text-teal-dark bg-white px-8 py-3.5 rounded-full hover:bg-mint transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5 text-coral" />
              WhatsApp: +91 80770 80985
            </a>
            <a
              href={contact.callHref}
              className="inline-flex items-center gap-2 font-montserrat font-semibold text-base text-white border-2 border-white/40 px-6 py-3.5 rounded-full hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
