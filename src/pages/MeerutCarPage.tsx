import { useState } from 'react';
import {
  Car,
  Phone,
  MessageCircle,
  ChevronDown,
  Wrench,
  Check,
  X,
  CheckCircle2,
} from 'lucide-react';
import Footer from '../sections/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { contact, getWhatsAppQuoteUrl } from '../config/contact';

const carRates = [
  {
    cc: 'Less than 1,000 cc',
    models: 'Alto 800, Alto K10, Kwid, S-Presso, Celerio, WagonR 1.0',
    tpRate: '₹2,094',
    gst: '₹377',
    totalWithGst: '₹2,471',
    note: 'Small family hatchbacks',
  },
  {
    cc: '1,000 cc to 1,500 cc',
    models: 'Swift, Dzire, Baleno, i20, Creta (1.5L), Brezza, Nexon, Venue, Ertiga',
    tpRate: '₹3,416',
    gst: '₹615',
    totalWithGst: '₹4,031',
    note: 'Most popular cars in Meerut',
  },
  {
    cc: 'Exceeding 1,500 cc',
    models: 'Scorpio-N, XUV700, Thar, Fortuner, Innova Crysta, Safari, Harrier',
    tpRate: '₹7,897',
    gst: '₹1,421',
    totalWithGst: '₹9,318',
    note: 'SUVs & Luxury cars',
  },
  {
    cc: 'Electric Cars (EVs)',
    models: 'Tata Tiago EV, Nexon EV, Punch EV, MG ZS EV',
    tpRate: '₹1,780 to ₹2,904',
    gst: '₹320 to ₹523',
    totalWithGst: '₹2,100 to ₹3,427',
    note: 'Government subsidized slab',
  },
];

const depreciationTable = [
  { part: 'Plastic & Rubber Bumper', standard: '50% katauti (Aadhe paise aapke)', zeroDep: '0% katauti (100% bill company degi)' },
  { part: 'Headlights & Taillights', standard: '50% katauti', zeroDep: '100% full replacement pass' },
  { part: 'Fiberglass Components', standard: '30% deduction', zeroDep: 'Full claim covered' },
  { part: 'Windshield & Window Glass', standard: '0% deduction', zeroDep: '100% full covered' },
  { part: 'Metal Doors, Bonnet & Fender', standard: 'Age ke hisab se 10-40% cut', zeroDep: '0% cut (Full compensation)' },
];

const carGarages = [
  {
    name: 'Maruti Suzuki Arena & Nexa Workshops',
    loc: 'Delhi Road, Partapur Industrial Area & Baghpat Road',
    desc: 'Swift, Dzire, Baleno, Brezza aur Ertiga ke liye priority cashless repair aur claim settlement.',
  },
  {
    name: 'Hyundai Motor Care Center',
    loc: 'Delhi Road & Shatabdi Nagar',
    desc: 'Creta, Venue, i20 aur Verna ke original parts replacement aur cashless billing.',
  },
  {
    name: 'Tata Motors & Mahindra Authorized Service',
    loc: 'Delhi-Meerut Road & Partapur Bypass',
    desc: 'Nexon, Punch, Harrier, Scorpio-N, Thar aur XUV700 ke bumper-to-bumper claim pass.',
  },
];

const faqs = [
  {
    q: 'Meerut mein car insurance ke liye Zero Dep cover lena kyun zaroori hai?',
    a: 'Meerut ke congested roads aur Delhi-Meerut Expressway traffic mein bumper scratches common hain. Standard insurance mein plastic bumper aur headlights par 50% katauti hoti hai, jabki Zero Dep mein poora 100% bill company bharti hai.',
  },
  {
    q: 'Agar car insurance expire ho gaya hai, to No Claim Bonus (NCB) kaise bachayein?',
    a: 'Policy expire hone ke 90 din ke andar renewal karwayein. SafeDrive par hum aapka 20% se 50% tak ka accumulated NCB discount nayi policy mein carry forward karwate hain, jisse ₹4,000 se ₹12,000 tak ki direct bachat hoti hai.',
  },
  {
    q: 'Kya car insurance renewal ke liye gaadi ka physical inspection zaroori hai?',
    a: 'Agar policy expire hue 90 din ke andar hai to zero inspection ke bina direct policy issue ho jaati hai. Agar 90 din se zyada ho gaye hain to hum aapko mobile self-inspection link bhejte hain jisse 30 minute mein approve ho jaata hai.',
  },
  {
    q: 'WhatsApp par car insurance quote lene ke liye kya bhejna hoga?',
    a: 'Aapko sirf apni car ki RC (Registration Certificate) aur purani policy ki photo hamare WhatsApp number (+91 80770 80985) par share karni hai. Hum 2 minute mein sabhi top insurers ke comparison quotes bhej denge.',
  },
];

export default function MeerutCarPage() {
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
              <span className="font-opensans text-[11px] text-slate-400 leading-tight">Meerut &bull; Car Desk</span>
            </div>
          </a>
          <nav className="flex items-center gap-4">
            <a href="/meerut" className="font-montserrat font-semibold text-sm text-teal hover:underline hidden sm:inline">&larr; Meerut Hub</a>
            <a href="/meerut/zero-dep-third-party-rates" className="font-montserrat font-semibold text-sm text-teal hover:underline hidden md:inline">Rate Desk</a>
            <a
              href={getWhatsAppQuoteUrl('Hi Rahul! Mujhe Meerut me apni car ka insurance quote chahiye.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-montserrat font-semibold text-xs md:text-sm text-white bg-coral px-4 md:px-5 py-2 md:py-2.5 rounded-full hover:bg-coral-hover transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Car Quote WhatsApp Pe
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-12 pb-16 md:py-20 bg-gradient-to-b from-teal/10 via-mint/20 to-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/15 text-teal text-xs font-bold uppercase tracking-wider mb-6">
              <Car className="w-3.5 h-3.5" />
              Car Insurance Specialist &bull; Meerut (UP-15)
            </div>

            <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-teal-dark leading-[1.15]">
              Car Insurance Jo Meerut Mein <br />
              <span className="text-teal">Minutes Mein Mile, Days Mein Nahi!</span>
            </h1>

            <p className="font-opensans text-base md:text-lg text-slate-600 mt-5 leading-relaxed">
              Maruti Swift, Dzire, Baleno, Creta, Brezza, Nexon ya Scorpio — Third Party se lekar Zero Dep bumper-to-bumper tak. 15+ top companies ke lowest rates, 2 minute mein WhatsApp delivery aur local cashless claim help.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppQuoteUrl('Hi Rahul! Meri car ka number share kar raha hoon, best insurance quote bhej dijiye.')}
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
                Call Advisor: {contact.callDisplay}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-slate-500 flex-wrap">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                Zero Inspection Under 90 Days
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                50% Tak NCB Transfer Guaranteed
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                Partapur &amp; Delhi Road Cashless Network
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Official 2026 Car Rate Table */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-2">OFFICIAL MANDATED RATES</span>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              Car Third Party Insurance Rate Chart 2026
            </h2>
            <p className="font-opensans text-slate-500 text-sm mt-2">
              IRDAI dwara fix kiye gaye government rates (sabhi general insurers par standard)
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-teal/20 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-teal-dark text-white font-montserrat text-xs md:text-sm uppercase tracking-wider">
                  <th className="p-4 md:p-5">Car Engine Capacity (CC)</th>
                  <th className="p-4 md:p-5">Popular Car Models</th>
                  <th className="p-4 md:p-5">1-Year Third Party Premium</th>
                  <th className="p-4 md:p-5">GST (18%)</th>
                  <th className="p-4 md:p-5">Total Estimated Payable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal/10 font-opensans text-sm">
                {carRates.map((row) => (
                  <tr key={row.cc} className="hover:bg-mint/20 transition-colors">
                    <td className="p-4 md:p-5 font-semibold text-teal-dark">{row.cc}</td>
                    <td className="p-4 md:p-5 text-slate-600">{row.models}</td>
                    <td className="p-4 md:p-5 text-slate-700">{row.tpRate}</td>
                    <td className="p-4 md:p-5 text-slate-500">{row.gst}</td>
                    <td className="p-4 md:p-5 font-bold text-teal text-base">{row.totalWithGst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-opensans text-xs text-slate-400 mt-4 text-center italic">
            (Note: In rates ke alawa individual PA cover mandatory hota hai agar pehle se 15 lakh ka cover nahi hai. Own damage aur Zero Dep add-on ke sath final price nikalne ke liye WhatsApp karein.)
          </p>
        </div>
      </section>

      {/* Maruti Suzuki Renewal Special */}
      <section className="py-12 bg-white border-b border-teal/15">
        <div className="max-w-[1000px] mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-teal-dark to-teal text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-3">
                Meerut Special &bull; Maruti Suzuki Hub
              </span>
              <h3 className="font-montserrat font-bold text-2xl md:text-3xl leading-snug">
                Maruti Swift, Dzire, Baleno ya Brezza? Showroom Se 40% Tak Sasta Renew Karein!
              </h3>
              <p className="font-opensans text-sm text-white/90 mt-3 leading-relaxed">
                Showroom ke mehnge renewal quote ke bajay wahi same top companies (ICICI Lombard, Tata AIG, HDFC ERGO) ki policy discounted rate par paayein. Meerut ke sabhi Maruti Arena aur Nexa body shops par 100% cashless approval.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppQuoteUrl('Hi Rahul! Meri Maruti car ka renewal quote nikaal kar bhej dijiye. Showroom se compare karna hai.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-montserrat font-bold text-xs md:text-sm text-teal-dark bg-white px-6 py-3.5 rounded-full hover:bg-mint transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-coral" />
                  Maruti Renewal Quote WhatsApp Karein
                </a>
                <a
                  href="/blog/maruti-car-insurance-renewal-meerut"
                  className="inline-flex items-center gap-1.5 font-montserrat font-semibold text-xs md:text-sm text-white hover:text-mint underline py-3.5"
                >
                  Read: Dealer vs SafeDrive Guide &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Dep vs Standard Comparison */}
      <section className="py-16 bg-mint/20 border-y border-teal/15">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-2">BUMPER TO BUMPER</span>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              Zero Dep (Nil Dep) vs Standard Policy
            </h2>
            <p className="font-opensans text-slate-500 text-sm mt-2">
              Plastic aur bumper damage par standard insurance 50% katauti karta hai — Zero Dep 100% deta hai.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-teal/20 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-teal text-white font-montserrat text-xs md:text-sm uppercase tracking-wider">
                  <th className="p-4 md:p-5">Car Component / Part</th>
                  <th className="p-4 md:p-5">Standard Comprehensive Policy</th>
                  <th className="p-4 md:p-5">Zero Dep (Bumper to Bumper)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-opensans text-sm">
                {depreciationTable.map((row) => (
                  <tr key={row.part} className="hover:bg-mint/10 transition-colors">
                    <td className="p-4 md:p-5 font-semibold text-slate-800">{row.part}</td>
                    <td className="p-4 md:p-5 text-red-600 flex items-center gap-2">
                      <X className="w-4 h-4 flex-shrink-0" />
                      {row.standard}
                    </td>
                    <td className="p-4 md:p-5 text-teal font-semibold">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 flex-shrink-0" />
                        {row.zeroDep}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-white rounded-2xl border border-teal/20 shadow-sm max-w-2xl mx-auto text-center">
            <h4 className="font-montserrat font-bold text-base text-teal-dark">Zero Dep Kis Gaadi Ke Liye Zaroori Hai?</h4>
            <p className="font-opensans text-xs text-slate-600 mt-2 leading-relaxed">
              Agar aapki gaadi 0 se 5 saal purani hai ya aap Gurgaon/Delhi-Meerut Expressway par daily commute karte hain, to Zero Dep zaroor lein. Minor bumper dent mein hi saal ka premium vasool ho jaata hai.
            </p>
          </div>
        </div>
      </section>

      {/* 90-Day NCB Savings */}
      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-teal/10 via-white to-mint/30 rounded-3xl p-8 md:p-10 border border-teal/20 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-3/5">
              <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-2">NCB PROTECTION</span>
              <h3 className="font-montserrat font-bold text-2xl text-teal-dark leading-snug">
                Policy Expire Ho Gayi? 90 Din Ke Andar Renew Karwayein
              </h3>
              <p className="font-opensans text-sm text-slate-600 mt-3 leading-relaxed">
                Car renewal mein No Claim Bonus (NCB) se ₹4,000 se lekar ₹12,000 tak ki direct bachat hoti hai. 90 din se pehle renew karne par aapka pura discount safe rehta hai.
              </p>
              <div className="mt-5">
                <a
                  href={getWhatsAppQuoteUrl('Hi Rahul! Meri car policy expire ho gayi hai, NCB transfer quote chahiye.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-montserrat font-bold text-xs text-white bg-coral px-6 py-3 rounded-full hover:bg-coral-hover transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  NCB Safe Renewal WhatsApp Karein
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/5 p-5 bg-white rounded-2xl border border-teal/20 shadow-sm text-center">
              <span className="text-xs font-semibold text-slate-500 uppercase block">Typical Savings Example</span>
              <span className="font-montserrat font-bold text-3xl text-teal mt-1 block">50% Discount</span>
              <p className="font-opensans text-xs text-slate-600 mt-2">
                Swift / Creta Own-Damage Premium: ₹10,000 <br />
                <strong>Aapko dena hoga: Sirf ₹5,000</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cashless Garages Meerut */}
      <section className="py-16 bg-mint/20 border-t border-teal/15">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-2">CASHLESS WORKSHOPS</span>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              Meerut Cashless Car Garages Network
            </h2>
            <p className="font-opensans text-slate-500 text-sm mt-2">
              Accident hone par seedha workshop gaadi drop karein — bill company pay karegi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carGarages.map((garage) => (
              <div key={garage.name} className="p-6 bg-white rounded-2xl border border-teal/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal mb-3">
                    <Wrench className="w-5 h-5" />
                    <h4 className="font-montserrat font-bold text-base text-teal-dark">{garage.name}</h4>
                  </div>
                  <p className="text-xs font-semibold text-teal bg-mint/30 p-2 rounded-lg mb-3">{garage.loc}</p>
                  <p className="font-opensans text-xs text-slate-600 leading-relaxed">{garage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white border-t border-teal/15">
        <div className="max-w-[800px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-2">FAQ</span>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              Car Insurance Ke Aksar Pooche Jaane Wale Sawaal
            </h2>
          </div>

          <div className="space-y-3.5">
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

      {/* Bottom CTA */}
      <section className="py-12 bg-teal-dark text-white text-center">
        <div className="max-w-[700px] mx-auto px-4">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl">
            Meerut Mein Apni Car Ka Lowest Quote Paayein
          </h2>
          <p className="font-opensans text-white/80 text-sm mt-2">
            Maruti, Hyundai, Tata, Mahindra ya kisi bhi car ki RC WhatsApp karein:
          </p>
          <a
            href={getWhatsAppQuoteUrl('Hi Rahul! Meri car ka best quote nikaal kar bhej dijiye.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat font-semibold text-sm md:text-base text-teal-dark bg-white px-8 py-3.5 rounded-full hover:bg-mint transition-all shadow-md mt-6"
          >
            <MessageCircle className="w-5 h-5 text-coral" />
            WhatsApp Pe Quote Lein (+91 80770 80985)
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
