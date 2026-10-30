import { useState } from 'react';
import {
  Sparkles,
  Phone,
  MessageCircle,
  ChevronDown,
  Wrench,
  Check,
  X,
  Car,
  Bike,
} from 'lucide-react';
import Footer from '../sections/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { contact, getWhatsAppQuoteUrl } from '../config/contact';

const twoWheelerRates = [
  {
    cc: 'Less than 75 cc',
    models: 'TVS XL 100, Mopeds',
    tpRate: '₹538',
    totalWithGst: '₹635',
    fineSaved: '₹2,000 fine avoided',
  },
  {
    cc: '75 cc to 150 cc',
    models: 'Splendor, Platina, Pulsar 125/150, Shine, Activa',
    tpRate: '₹714',
    totalWithGst: '₹843',
    fineSaved: 'Most popular in Meerut',
  },
  {
    cc: '150 cc to 350 cc',
    models: 'Classic 350, Apache RTR, Pulsar 220, FZ',
    tpRate: '₹1,366',
    totalWithGst: '₹1,612',
    fineSaved: 'Sports & Cruiser bikes',
  },
  {
    cc: 'Exceeding 350 cc',
    models: 'KTM 390, RE Himalayan, Interceptor 650',
    tpRate: '₹2,804',
    totalWithGst: '₹3,309',
    fineSaved: 'Superbikes',
  },
];

const fourWheelerRates = [
  {
    cc: 'Less than 1,000 cc',
    models: 'Alto 800, Alto K10, Kwid, S-Presso, Celerio, WagonR 1.0',
    tpRate: '₹2,094',
    totalWithGst: '₹2,471',
    fineSaved: 'Small family hatchbacks',
  },
  {
    cc: '1,000 cc to 1,500 cc',
    models: 'Swift, Dzire, Baleno, i20, Creta (1.5L), Brezza, Nexon, Venue, Ertiga',
    tpRate: '₹3,416',
    totalWithGst: '₹4,031',
    fineSaved: 'Most popular cars in Meerut',
  },
  {
    cc: 'Exceeding 1,500 cc',
    models: 'Scorpio-N, XUV700, Thar, Fortuner, Innova Crysta, Safari, Harrier',
    tpRate: '₹7,897',
    totalWithGst: '₹9,318',
    fineSaved: 'SUVs & Luxury cars',
  },
  {
    cc: 'Electric Cars (EVs)',
    models: 'Tata Tiago EV, Nexon EV, Punch EV, MG ZS EV',
    tpRate: '₹1,780 to ₹2,904',
    totalWithGst: '₹2,100 to ₹3,427',
    fineSaved: 'EV government subsidy slab',
  },
];

const depreciationComparison = [
  { part: 'Plastic & Rubber Bumper', standard: '50% katauti (Aadhe paise aapke)', zeroDep: '0% katauti (100% company degi)' },
  { part: 'Headlights & Taillights', standard: '50% katauti', zeroDep: '100% full replacement covered' },
  { part: 'Fiberglass Components', standard: '30% deduction', zeroDep: 'Full claim pass' },
  { part: 'Windshield & Window Glass', standard: '0% deduction', zeroDep: '100% full covered' },
  { part: 'Metal Doors & Bonnet', standard: 'Age ke hisab se 10-40% cut', zeroDep: '0% cut (Full value paid)' },
];

const faqs = [
  {
    q: 'Meerut mein bike ka Third Party rate sabhi companies mein same hota hai kya?',
    a: 'Haan! Third Party insurance ke premium rates IRDAI (Government Regulator) dwara fix kiye jaate hain. Isliye Tata AIG, ICICI Lombard, Bajaj Allianz ya kisi bhi company mein base TP rate bilkul same rehta hai.',
  },
  {
    q: 'Zero Dep policy lene par claim ke time mujhe kitna dena padega?',
    a: 'Zero Dep policy mein parts ke replacement par depreciation ₹0 hota hai. Aapko sirf standard file charge (Compulsory Deductible, jo lagbhag ₹1,000 hota hai) workshop par pay karna hota hai.',
  },
  {
    q: 'Meerut mein Maruti aur Hyundai ki cashless servicing kahan milti hai?',
    a: 'Delhi Road aur Partapur corridor par Maruti Arena, Nexa, aur Hyundai Motor Care ke authorized centers par SafeDrive ke customers ko direct cashless settlement milta hai.',
  },
  {
    q: 'WhatsApp par rate list aur quote lene ke liye kya details chahiye?',
    a: 'Sirf apni gaadi ka number ya RC photo WhatsApp (+91 80770 80985) par share karein. Hum 2 minute mein sabhi companies ke comparative quotation bhej dete hain.',
  },
];

export default function MeerutRatesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [vehicleType, setVehicleType] = useState<'car' | 'bike'>('car');

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
              <span className="font-opensans text-[11px] text-slate-400 leading-tight">Meerut &bull; Rate Desk 2026</span>
            </div>
          </a>
          <nav className="flex items-center gap-4">
            <a href="/meerut" className="font-montserrat font-semibold text-sm text-teal hover:underline hidden sm:inline">&larr; Meerut Hub</a>
            <a href="/meerut/expired-insurance-renewal" className="font-montserrat font-semibold text-sm text-teal hover:underline hidden md:inline">Expired Renewal</a>
            <a
              href={getWhatsAppQuoteUrl('Hi Rahul! Mujhe Meerut me gaadi ke insurance rates compare karne hain.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-montserrat font-semibold text-xs md:text-sm text-white bg-coral px-4 md:px-5 py-2 md:py-2.5 rounded-full hover:bg-coral-hover transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Rate WhatsApp Karein
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-12 pb-16 md:py-20 bg-gradient-to-b from-teal/10 via-mint/20 to-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/15 text-teal text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Official 2026 Rate Chart &bull; Meerut (UP-15)
            </div>

            <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-teal-dark leading-[1.15]">
              Zero Dep vs Third Party Insurance Rates <br />
              <span className="text-teal">Meerut (UP-15) Rate Chart &amp; Garages</span>
            </h1>

            <p className="font-opensans text-base md:text-lg text-slate-600 mt-5 leading-relaxed">
              Bike aur car insurance ke official 2026 IRDAI rates, bumper-to-bumper Zero Dep deduction comparison, aur Partapur/Delhi Road ke cashless garages ki complete list.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppQuoteUrl('Hi Rahul! Meri gaadi ke liye Zero Dep aur Third Party quote nikaal kar bhejiye.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-base text-white bg-coral px-8 py-4 rounded-full hover:bg-coral-hover shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Pe Best Rate Paayein (+91 80770 80985)
              </a>
              <a
                href={contact.callHref}
                className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-base text-teal-dark bg-white border-2 border-teal/30 px-6 py-4 rounded-full hover:border-teal transition-all"
              >
                <Phone className="w-4 h-4 text-teal" />
                Call Advisor: {contact.callDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Official Rate Table (Cars & Bikes Toggle) */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-2">OFFICIAL MANDATED RATES</span>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              {vehicleType === 'car' ? 'Car' : 'Bike'} Third Party Insurance Rate Chart 2026
            </h2>
            <p className="font-opensans text-slate-500 text-sm mt-2">
              IRDAI dwara fix kiye gaye government rates (sabhi insurance companies par lagu)
            </p>
          </div>

          {/* Vehicle Selector Tabs */}
          <div className="flex justify-center items-center gap-3 mb-10">
            <button
              type="button"
              onClick={() => setVehicleType('car')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-montserrat font-semibold text-sm transition-all ${
                vehicleType === 'car'
                  ? 'bg-teal text-white shadow-md scale-105'
                  : 'bg-mint/40 text-teal-dark hover:bg-mint/60'
              }`}
            >
              <Car className="w-4 h-4" />
              Four-Wheeler (Car Rate Chart)
            </button>
            <button
              type="button"
              onClick={() => setVehicleType('bike')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-montserrat font-semibold text-sm transition-all ${
                vehicleType === 'bike'
                  ? 'bg-teal text-white shadow-md scale-105'
                  : 'bg-mint/40 text-teal-dark hover:bg-mint/60'
              }`}
            >
              <Bike className="w-4 h-4" />
              Two-Wheeler (Bike Rate Chart)
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-teal/20 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-teal-dark text-white font-montserrat text-xs md:text-sm uppercase tracking-wider">
                  <th className="p-4 md:p-5">{vehicleType === 'car' ? 'Car Engine Capacity (CC)' : 'Bike Engine Capacity (CC)'}</th>
                  <th className="p-4 md:p-5">{vehicleType === 'car' ? 'Popular Car Models' : 'Popular Bike Models'}</th>
                  <th className="p-4 md:p-5">1-Year Third Party Premium</th>
                  <th className="p-4 md:p-5">GST (18%)</th>
                  <th className="p-4 md:p-5">Total Estimated Payable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal/10 font-opensans text-sm">
                {(vehicleType === 'car' ? fourWheelerRates : twoWheelerRates).map((row) => (
                  <tr key={row.cc} className="hover:bg-mint/20 transition-colors">
                    <td className="p-4 md:p-5 font-semibold text-teal-dark">{row.cc}</td>
                    <td className="p-4 md:p-5 text-slate-600">{row.models}</td>
                    <td className="p-4 md:p-5 text-slate-700">{row.tpRate}</td>
                    <td className="p-4 md:p-5 text-slate-500">
                      {vehicleType === 'car'
                        ? row.cc.includes('1,000') && !row.cc.includes('Less')
                          ? '₹615'
                          : row.cc.includes('Exceeding')
                          ? '₹1,421'
                          : row.cc.includes('Electric')
                          ? '₹320 - ₹523'
                          : '₹377'
                        : row.cc.includes('Less')
                        ? '₹97'
                        : row.cc.includes('75')
                        ? '₹129'
                        : row.cc.includes('150')
                        ? '₹246'
                        : '₹505'}
                    </td>
                    <td className="p-4 md:p-5 font-bold text-teal text-base">{row.totalWithGst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-opensans text-xs text-slate-400 mt-4 text-center italic">
            (Note: In rates ke alawa Personal Accident Cover (PA Cover) mandatory hota hai agar aapke paas pehle se ₹15 lakh ka active individual PA cover nahi hai.)
          </p>
        </div>
      </section>

      {/* Zero Dep vs Standard Comparison */}
      <section className="py-16 bg-mint/20 border-y border-teal/15">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-2">CLAIM TIME SAVINGS</span>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              Car Insurance: Standard Policy vs Zero Dep Cover
            </h2>
            <p className="font-opensans text-slate-500 text-sm mt-2">
              Plastic aur bumper damage aane par aapki jeb se kitna paisa katega?
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
                {depreciationComparison.map((row) => (
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

          {/* Real Claim Calculation Example */}
          <div className="mt-10 p-6 md:p-8 bg-white rounded-2xl border border-teal/20 shadow-sm max-w-3xl mx-auto">
            <h3 className="font-montserrat font-bold text-lg text-teal-dark mb-3">
              Real Example: Swift / Creta Front Bumper Hit
            </h3>
            <p className="font-opensans text-sm text-slate-600 leading-relaxed">
              Workshop Repair Bill: <strong>₹25,000</strong> (Plastic bumper &amp; headlights).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs font-opensans">
              <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                <span className="font-bold text-red-600 block mb-1">Standard Comprehensive Claim</span>
                <span>Plastic par 50% cut = <strong>₹11,500 aapki jeb se lagega</strong>. Company sirf baaki degi.</span>
              </div>
              <div className="p-4 rounded-xl bg-teal/10 border border-teal/30">
                <span className="font-bold text-teal block mb-1">Zero Dep Claim Payout</span>
                <span>Depreciation 0% = <strong>Pura bill insurance company bharegi</strong>. Aapko sirf ₹1,000 file charge dena hai.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cashless Workshops Meerut */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-2">WORKSHOPS DIRECTORY</span>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-teal-dark">
              Cashless Garages Across Meerut
            </h2>
            <p className="font-opensans text-slate-500 text-sm mt-2">
              SafeDrive customers ko in corridors par direct cashless service milti hai:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-teal/20 bg-mint/20">
              <div className="flex items-center gap-2 text-teal mb-3">
                <Wrench className="w-5 h-5" />
                <h3 className="font-montserrat font-bold text-lg text-teal-dark">Delhi Road &amp; Partapur Corridor</h3>
              </div>
              <p className="font-opensans text-sm text-slate-700 leading-relaxed">
                Maruti Suzuki Arena, Nexa Workshop, Hyundai Motor Care, Tata Motors Authorized Workshop, Mahindra Passenger Vehicles Service.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-teal/20 bg-mint/20">
              <div className="flex items-center gap-2 text-teal mb-3">
                <Wrench className="w-5 h-5" />
                <h3 className="font-montserrat font-bold text-lg text-teal-dark">Garh Road &amp; Shastri Nagar Hub</h3>
              </div>
              <p className="font-opensans text-sm text-slate-700 leading-relaxed">
                Bajaj Two-Wheeler Authorized Service, Honda Care Center, TVS Motor Care, Bosch Car Multi-Brand Workshops.
              </p>
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
              Rates Aur Deductions Se Jude Sawaal
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
            Apni Gaadi Ka Lowest Quote Abhi Calculate Karein
          </h2>
          <p className="font-opensans text-white/80 text-sm mt-2">
            15+ insurance companies ke comparison ke sath lowest premium paayein:
          </p>
          <a
            href={getWhatsAppQuoteUrl('Hi Rahul! Meri gaadi ka best insurance quote aur rate chart WhatsApp kar dijiye.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat font-semibold text-sm md:text-base text-teal-dark bg-white px-8 py-3.5 rounded-full hover:bg-mint transition-all shadow-md mt-6"
          >
            <MessageCircle className="w-5 h-5 text-coral" />
            WhatsApp: +91 80770 80985
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
