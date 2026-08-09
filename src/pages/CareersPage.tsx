import { useState } from 'react';
import {
  Phone,
  Bike,
  MapPin,
  Clock,
  GraduationCap,
  IndianRupee,
  CheckCircle2,
  MessageCircle,
  Loader2,
} from 'lucide-react';
import Footer from '../sections/Footer';
import { contact, getWhatsAppQuoteUrl } from '../config/contact';

const WEB3FORMS_KEY = '342507f9-2426-4a14-b86c-cef1758251cf';

const roles = [
  {
    icon: Phone,
    title: 'Telecaller / Lead Follow-up',
    mode: 'Work from home',
    location: 'Kahin se bhi (remote)',
    summary:
      'Leads ko call karna, unke sawaal samajhna, follow-up karna aur interested logon ki detail aage bhejna. Jo phone pe aaram se baat kar lete hain, unke liye best.',
    points: [
      'Din bhar mein 30-50 calls (WhatsApp + phone)',
      'Customer ke sawaalon ke jawab dena - training denge',
      'Follow-up tracker maintain karna',
      'Hindi aur basic English aani chahiye',
    ],
  },
  {
    icon: Bike,
    title: 'Field Sales Executive',
    mode: 'On-ground',
    location: 'Gurgaon, Delhi-NCR ya Meerut',
    summary:
      'Showroom, garage aur local market mein ja kar relationship banana, customers se milna aur policy close karwana. Apni gaadi ho toh accha rahega.',
    points: [
      'Showroom aur garage owners se tie-up',
      'Customer ke paas ja kar documents collect karna',
      'Apne area mein SafeDrive ka naam banana',
      'Apni bike/scooter honi chahiye',
    ],
  },
];

const whatYouGet = [
  {
    icon: IndianRupee,
    title: 'Fixed salary + incentive',
    text: 'Har mahine fixed amount, aur upar se har closed policy pe incentive. Jitna zyada kaam, utni zyada kamai. Exact figure interview mein discuss karenge.',
  },
  {
    icon: GraduationCap,
    title: 'Poori training',
    text: 'Insurance ka koi experience nahi? Koi baat nahi. Product, pricing, objection handling - sab sikhaya jaayega. Freshers welcome hain.',
  },
  {
    icon: Clock,
    title: 'Flexible timing',
    text: 'Telecaller role ghar se ho sakta hai. Field role mein apne area aur time ka control aapke paas rehta hai.',
  },
  {
    icon: MessageCircle,
    title: 'Direct support',
    text: 'Koi lambi reporting chain nahi. Seedha owner se baat, turant jawab. Atke toh WhatsApp pe puchh lo.',
  },
];

const eligibility = [
  'Umar 18 saal se upar',
  'Kam se kam 10th/12th pass',
  'Aadhaar aur PAN card',
  'Apna smartphone (WhatsApp chalta ho)',
  'Field role ke liye - apni bike/scooter',
  'Experience zaroori nahi, seekhne ki neeyat zaroori hai',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function CareersPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const formEl = e.currentTarget;
    const data = new FormData(formEl);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus('sent');
        formEl.reset();
      } else {
        setStatus('error');
        setErrorMsg(json.message || 'Kuch gadbad ho gayi. WhatsApp pe try karein.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network issue lag raha hai. WhatsApp pe message kar dein.');
    }
  };

  return (
    <div className="relative bg-white">
      {/* Simple header */}
      <header className="sticky top-0 z-50 h-[72px] bg-white/90 backdrop-blur-xl border-b border-teal/15">
        <div className="max-w-[1100px] mx-auto h-full flex items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src="/safedrive-logo.png"
              alt="SafeDrive Insurance"
              className="w-9 h-9 object-contain rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-lg text-teal-dark leading-tight">
                SafeDrive
              </span>
              <span className="font-opensans text-[11px] text-slate-400 leading-tight">
                Ride ho jaaye sure!
              </span>
            </div>
          </a>
          <a
            href="/"
            className="font-montserrat font-semibold text-sm text-teal hover:underline"
          >
            &larr; Website pe wapas
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-6 pt-16 pb-12 text-center">
        <span className="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal">
          Careers at SafeDrive
        </span>
        <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-[1.15] text-teal-dark mt-4">
          Team Join Karein,
          <br />
          <span className="text-teal">Seekhein Aur Kamayein</span>
        </h1>
        <p className="font-opensans text-lg text-slate-500 mt-6 max-w-[620px] mx-auto leading-relaxed">
          SafeDrive Gurgaon, Delhi-NCR aur Meerut mein bike aur car insurance ka kaam
          karta hai. Hum apni team badha rahe hain - agar aapko logon se baat karna
          pasand hai, toh yahan jagah hai.
        </p>
        <a
          href="#apply"
          className="inline-block mt-8 font-montserrat font-semibold text-[15px] text-white bg-coral px-8 py-3.5 rounded-full hover:bg-coral-hover transition-all duration-200"
        >
          Abhi Apply Karein
        </a>
      </section>

      {/* Open roles */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-6 py-12">
        <h2 className="font-montserrat font-bold text-3xl text-teal-dark text-center">
          Abhi 2 Positions Khaali Hain
        </h2>
        <p className="font-opensans text-slate-500 text-center mt-3 max-w-[560px] mx-auto">
          Dono roles ke liye insurance ka experience zaroori nahi hai. Training hum
          denge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="border-2 border-teal/15 rounded-2xl p-7 hover:border-teal/40 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-teal" strokeWidth={2} />
                </div>

                <h3 className="font-montserrat font-bold text-xl text-teal-dark mt-4">
                  {role.title}
                </h3>

                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-teal bg-teal/10 px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    {role.mode}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <MapPin className="w-3.5 h-3.5" />
                    {role.location}
                  </span>
                </div>

                <p className="font-opensans text-[15px] text-slate-500 leading-relaxed mt-4">
                  {role.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {role.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 font-opensans text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#apply"
                  className="inline-block mt-6 font-montserrat font-semibold text-sm text-teal border-2 border-teal px-6 py-2.5 rounded-full hover:bg-teal hover:text-white transition-all duration-200"
                >
                  Is Role Ke Liye Apply Karein
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* What you get */}
      <section className="bg-teal/5 py-16 mt-4">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <h2 className="font-montserrat font-bold text-3xl text-teal-dark text-center">
            Aapko Kya Milega
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {whatYouGet.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 flex gap-4 items-start"
                >
                  <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-teal" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-teal-dark">
                      {item.title}
                    </h3>
                    <p className="font-opensans text-[15px] text-slate-500 leading-relaxed mt-1.5">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-6 py-16">
        <h2 className="font-montserrat font-bold text-3xl text-teal-dark text-center">
          Kaun Apply Kar Sakta Hai
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-8 max-w-[760px] mx-auto">
          {eligibility.map((e) => (
            <li
              key={e}
              className="flex items-start gap-2.5 font-opensans text-[15px] text-slate-600"
            >
              <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
              {e}
            </li>
          ))}
        </ul>
      </section>

      {/* Apply */}
      <section id="apply" className="bg-teal/5 py-16">
        <div className="max-w-[640px] mx-auto px-4 md:px-6">
          <h2 className="font-montserrat font-bold text-3xl text-teal-dark text-center">
            Apply Karein
          </h2>
          <p className="font-opensans text-slate-500 text-center mt-3">
            Form bhar dein ya seedha WhatsApp pe message karein - dono chalega.
          </p>

          {status === 'sent' ? (
            <div className="bg-white border-2 border-teal rounded-2xl p-8 mt-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-teal mx-auto" />
              <h3 className="font-montserrat font-bold text-xl text-teal-dark mt-4">
                Application mil gayi!
              </h3>
              <p className="font-opensans text-slate-500 mt-2">
                Hum 2-3 din mein aapko call karenge. Jaldi hai? WhatsApp pe message
                kar dein.
              </p>
              <a
                href={getWhatsAppQuoteUrl('Hi SafeDrive! Maine careers form bhara hai.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 font-montserrat font-semibold text-sm text-white bg-teal px-6 py-3 rounded-full"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Karein
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 mt-8 space-y-4"
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
              <input
                type="hidden"
                name="subject"
                value="Nayi Job Application - SafeDrive Careers"
              />
              <input type="hidden" name="from_name" value="SafeDrive Careers Page" />
              {/* honeypot - spam bots fill this, humans never see it */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block font-montserrat font-semibold text-sm text-teal-dark mb-1.5"
                >
                  Poora naam *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-2.5 font-opensans text-[15px] focus:border-teal focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-montserrat font-semibold text-sm text-teal-dark mb-1.5"
                >
                  WhatsApp number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9+ ]{10,15}"
                  placeholder="98990 54206"
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-2.5 font-opensans text-[15px] focus:border-teal focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block font-montserrat font-semibold text-sm text-teal-dark mb-1.5"
                >
                  Aap kahan rehte hain? *
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  required
                  placeholder="Gurgaon / Delhi / Meerut..."
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-2.5 font-opensans text-[15px] focus:border-teal focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block font-montserrat font-semibold text-sm text-teal-dark mb-1.5"
                >
                  Kaunsa role chahiye? *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  defaultValue=""
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-2.5 font-opensans text-[15px] focus:border-teal focus:outline-none transition-colors bg-white"
                >
                  <option value="" disabled>
                    Select karein
                  </option>
                  <option value="Telecaller / Lead Follow-up">
                    Telecaller / Lead Follow-up
                  </option>
                  <option value="Field Sales Executive">Field Sales Executive</option>
                  <option value="Koi bhi role">Koi bhi role chalega</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block font-montserrat font-semibold text-sm text-teal-dark mb-1.5"
                >
                  Apne baare mein thoda bataiye
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows={4}
                  placeholder="Kya kaam kar rahe hain abhi, kitna experience hai, kab join kar sakte hain..."
                  className="w-full border-2 border-slate-200 rounded-lg px-4 py-2.5 font-opensans text-[15px] focus:border-teal focus:outline-none transition-colors resize-y"
                />
              </div>

              {status === 'error' && (
                <p className="font-opensans text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full font-montserrat font-semibold text-[15px] text-white bg-coral px-8 py-3.5 rounded-full hover:bg-coral-hover transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {status === 'sending' && (
                  <Loader2 className="w-4 h-4 animate-spin" />
                )}
                {status === 'sending' ? 'Bheja ja raha hai...' : 'Application Bhejein'}
              </button>

              <p className="font-opensans text-[13px] text-slate-400 text-center">
                Ya WhatsApp pe message karein:{' '}
                <a
                  href={getWhatsAppQuoteUrl(
                    'Hi SafeDrive! Mujhe job ke baare mein baat karni hai.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal font-semibold hover:underline"
                >
                  {contact.whatsappDisplay}
                </a>
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
