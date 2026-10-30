import { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Phone,
  MessageCircle,
  ChevronDown,
  ShieldAlert,
  ArrowRight,
  Camera,
  Car,
} from 'lucide-react';
import Footer from '../sections/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { contact, getWhatsAppQuoteUrl } from '../config/contact';

const faqs = [
  {
    q: 'Meerut mein policy expire hue kitne din tak NCB discount bachta hai?',
    a: 'Policy expire hone ke exact 90 din tak aapka 20% se 50% No Claim Bonus safe rehta hai. 91st day par NCB zero ho jaata hai, isliye 90 din se pehle policy zaroor renew kar lein.',
  },
  {
    q: 'Agar 90 din se zyada ho gaye to kya agent gaadi dekhne ghar aayega?',
    a: 'Nahi! Hum aapke phone par ek secure video inspection link bhejte hain. Aap apne smartphone se 360-degree gaadi ki video aur odometer photo upload karenge aur 30 minute ke andar policy approve ho jaati hai.',
  },
  {
    q: 'UP-15 Meerut mein bina insurance pakde gaye to kya hoga?',
    a: 'Begum Bridge, Delhi Road, Garh Road aur Tejgarhi par automated ANPR cameras aur traffic police active hain. Section 196 ke tehat first time ₹2,000 ka court challan hota hai aur repeat offense par ₹4,000 ka fine lagta hai.',
  },
  {
    q: 'WhatsApp se policy issue hone mein kitna time lagta hai?',
    a: 'Agar policy 90 din ke andar hai to payment karte hi 2 se 5 minute mein verified digital policy PDF WhatsApp par mil jaati hai aur VAHAN database par status active ho jaata hai.',
  },
];

export default function MeerutExpiredPage() {
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
              <span className="font-opensans text-[11px] text-slate-400 leading-tight">Meerut &bull; Expired Renewal Hub</span>
            </div>
          </a>
          <nav className="flex items-center gap-4">
            <a href="/meerut" className="font-montserrat font-semibold text-sm text-teal hover:underline hidden sm:inline">&larr; Meerut Hub</a>
            <a href="/meerut/zero-dep-third-party-rates" className="font-montserrat font-semibold text-sm text-teal hover:underline hidden md:inline">Rate Chart</a>
            <a
              href={getWhatsAppQuoteUrl('Hi Rahul! Meri gaadi ki policy expire ho gayi hai, Meerut me turant renew karwani hai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-montserrat font-semibold text-xs md:text-sm text-white bg-coral px-4 md:px-5 py-2 md:py-2.5 rounded-full hover:bg-coral-hover transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Par Renew Karein
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-12 pb-16 md:py-20 bg-gradient-to-b from-coral/10 via-white to-mint/20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral/15 text-coral text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle className="w-4 h-4" />
              Urgent Problem Solving &bull; Meerut (UP-15)
            </div>

            <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-teal-dark leading-[1.15]">
              Car Ya Bike Insurance Expire Ho Gaya? <br />
              <span className="text-coral">Meerut Mein 90 Din Ka Rule &amp; Instant Renewal</span>
            </h1>

            <p className="font-opensans text-base md:text-lg text-slate-600 mt-5 leading-relaxed">
              UP-15 ke ₹2,000 challan fine se bachiye aur apna 20% se 50% No Claim Bonus (NCB) safe rakhein. SafeDrive par ghar baithe WhatsApp par 2 minute mein policy delivery.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppQuoteUrl('Hi Rahul! Meri gaadi ki insurance policy expire ho gayi hai, mujhe Meerut me instant quote chahiye.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-base text-white bg-coral px-8 py-4 rounded-full hover:bg-coral-hover shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Pe RC Bhejiye (+91 80770 80985)
              </a>
              <a
                href={contact.callHref}
                className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-base text-teal-dark bg-white border-2 border-teal/30 px-6 py-4 rounded-full hover:border-teal transition-all"
              >
                <Phone className="w-4 h-4 text-teal" />
                Direct Call: {contact.callDisplay}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-teal/15 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span><strong>0 - 90 Days Gap:</strong> Zero inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span><strong>50% NCB Bonus:</strong> 100% Retained</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span><strong>Delivery:</strong> 2 Mins on WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Fine vs Policy */}
      <section className="py-14 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-6 md:p-10 border border-red-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-montserrat font-bold text-xl md:text-2xl text-slate-800">
                  Traffic Fine vs Insurance Premium: Ganit Samajhiye
                </h2>
                <p className="font-opensans text-sm text-slate-600 mt-2 leading-relaxed">
                  Meerut traffic police cameras Begum Bridge, Delhi Road aur Tejgarhi chauraha par active hain:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-white rounded-xl border border-red-200">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">Traffic Challan Fine</span>
                    <span className="font-montserrat font-bold text-2xl text-red-600 mt-1 block">₹2,000 to ₹4,000</span>
                    <p className="text-xs text-slate-500 mt-1">Court me peshi aur DL suspend hone ka risk.</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-teal/30">
                    <span className="text-xs font-bold text-teal uppercase tracking-wider block">1-Year SafeDrive Bike Policy</span>
                    <span className="font-montserrat font-bold text-2xl text-teal mt-1 block">Sirf ₹843 (GST sahit)</span>
                    <p className="text-xs text-slate-500 mt-1">Saal bhar bina kisi traffic dar ke aaram se chalaiye.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day NCB Protection Breakdown */}
      <section className="py-16 bg-mint/20 border-y border-teal/15">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-montserrat font-semibold text-xs uppercase tracking-wider text-teal block mb-2">
              NCB GRACE PERIOD RULES
            </span>
            <h2 className="font-montserrat font-bold text-2xl md:text-4xl text-teal-dark">
              90 Din Ka Golden Rule: NCB Bachana Zaroori Hai
            </h2>
            <p className="font-opensans text-slate-500 text-sm md:text-base mt-3">
              Der karne ka seedha matlab hai agle saal ka premium 20% se 50% zyada mehenga hona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-7 bg-white rounded-2xl border-2 border-teal/20 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal/10 text-teal uppercase mb-3">
                  Under 90 Days Gap
                </span>
                <h3 className="font-montserrat font-bold text-xl text-teal-dark">100% NCB Safe &amp; No Inspection</h3>
                <p className="font-opensans text-sm text-slate-600 mt-3 leading-relaxed">
                  Agar aapki car ya bike expire hue 90 din nahi hue hain, to company bina gaadi dekhe purana NCB discount aage continue karti hai.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> 20% se 50% premium discount barqaraar</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> Zero physical inspection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> Instant 2-minute policy issuance</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppQuoteUrl('Hi Rahul! Meri policy expire hue 90 din nahi hue, NCB bachana hai.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat font-bold text-xs text-teal hover:underline flex items-center gap-1"
                >
                  Under 90 Days Quote Lein <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-7 bg-white rounded-2xl border-2 border-coral/30 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-coral/10 text-coral uppercase mb-3">
                  Above 90 Days Gap
                </span>
                <h3 className="font-montserrat font-bold text-xl text-teal-dark">Self-Inspection Video Upload</h3>
                <p className="font-opensans text-sm text-slate-600 mt-3 leading-relaxed">
                  90 din paar hone par NCB reset hota hai, lekin SafeDrive aapko smartphone video link bhejkar 30 minute mein approval dila deta hai.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Camera className="w-4 h-4 text-coral" /> Phone camera se 360-degree gaadi scan</li>
                  <li className="flex items-center gap-2"><Car className="w-4 h-4 text-coral" /> Kisi garage ya showroom jaane ki zaroorat nahi</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-coral" /> AI surveyor 30 min approval</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppQuoteUrl('Hi Rahul! Meri policy expire hue 90 din se zyada ho gaye hain, video inspection renewal chahiye.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat font-bold text-xs text-coral hover:underline flex items-center gap-1"
                >
                  90+ Days Inspection Quote Lein <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Renewal Process */}
      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              Meerut Mein Renewal Ke 3 Aasaan Steps
            </h2>
            <p className="font-opensans text-slate-500 text-sm mt-2">Paperless, fast aur 100% verified policy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-teal/5 border border-teal/15 text-center">
              <span className="w-10 h-10 rounded-full bg-teal text-white font-montserrat font-bold text-lg flex items-center justify-center mx-auto mb-4">1</span>
              <h3 className="font-montserrat font-bold text-base text-teal-dark">RC Photo Bhejiye</h3>
              <p className="font-opensans text-xs text-slate-600 mt-2">Gaadi ki RC aur purani policy WhatsApp (+91 80770 80985) par share karein.</p>
            </div>

            <div className="p-6 rounded-2xl bg-teal/5 border border-teal/15 text-center">
              <span className="w-10 h-10 rounded-full bg-teal text-white font-montserrat font-bold text-lg flex items-center justify-center mx-auto mb-4">2</span>
              <h3 className="font-montserrat font-bold text-base text-teal-dark">Quotes Compare Karein</h3>
              <p className="font-opensans text-xs text-slate-600 mt-2">Tata AIG, ICICI Lombard aur Bajaj Allianz ke direct discount rates paayein.</p>
            </div>

            <div className="p-6 rounded-2xl bg-teal/5 border border-teal/15 text-center">
              <span className="w-10 h-10 rounded-full bg-teal text-white font-montserrat font-bold text-lg flex items-center justify-center mx-auto mb-4">3</span>
              <h3 className="font-montserrat font-bold text-base text-teal-dark">Instant Policy PDF</h3>
              <p className="font-opensans text-xs text-slate-600 mt-2">Payment hote hi WhatsApp par digital policy aur VAHAN portal update.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-mint/15 border-t border-teal/15">
        <div className="max-w-[800px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-2">FAQ</span>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              Aksar Pooche Jaane Wale Sawaal
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="border border-teal/15 rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-montserrat font-bold text-sm md:text-base text-teal-dark hover:text-teal transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-teal transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 font-opensans text-sm text-slate-600 leading-relaxed border-t border-teal/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-teal-dark text-white text-center">
        <div className="max-w-[700px] mx-auto px-4">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl">
            Meerut Mein Policy Abhi Renew Karwayein
          </h2>
          <p className="font-opensans text-white/80 text-sm mt-2">
            Ek din ki der se aapka 50% NCB bonus haath se ja sakta hai. WhatsApp karein:
          </p>
          <a
            href={getWhatsAppQuoteUrl('Hi Rahul! Meri expired policy turant renew kar do Meerut me.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat font-semibold text-sm md:text-base text-teal-dark bg-white px-8 py-3.5 rounded-full hover:bg-mint transition-all shadow-md mt-6"
          >
            <MessageCircle className="w-5 h-5 text-coral" />
            WhatsApp Pe Message Karein (+91 80770 80985)
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
