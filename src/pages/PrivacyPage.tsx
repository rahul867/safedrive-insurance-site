import Footer from '../sections/Footer';
import { contact } from '../config/contact';

const LAST_UPDATED = '14 August 2026';

type Block = string | string[];

type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    id: 'who-we-are',
    title: '1. Who We Are',
    blocks: [
      'SafeDrive Insurance ("SafeDrive", "we", "us", "our") is a motor insurance agency based in Meerut, Uttar Pradesh, serving customers in Gurgaon, Delhi-NCR and Meerut. We help people buy and renew bike and car insurance as an authorized insurance agent with Policybazaar.',
      'This Privacy Policy explains what personal information we collect through our website safedriveinsurance.in, why we collect it, who we share it with, and what choices you have. Please read it before sharing your details with us.',
    ],
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    blocks: [
      'We only collect information that we actually need to give you a quote, issue a policy, or answer your question. Depending on how you contact us, this may include:',
      [
        'Contact details - your name, mobile or WhatsApp number, email address and city.',
        'Vehicle details - registration number, make and model, year of purchase, and details of your existing or previous policy.',
        'Policy and claim details - your current insurer, policy number, expiry date, no-claim bonus and claim history, where you choose to share them.',
        'Documents you send us - such as your existing policy copy, RC, or identity documents, when these are required to issue or renew a policy.',
        'Job application details - if you apply through our Careers page, the name, phone number, city, role preference and background information you enter in the form.',
        'Website usage data - pages you visit, approximate location (city level), device and browser type, and how you arrived at our site. This is collected automatically through analytics tools.',
      ],
      'We do not ask for and do not want your bank passwords, card CVV, UPI PIN or OTPs. Never share these with anyone, including someone claiming to be from SafeDrive.',
    ],
  },
  {
    id: 'how-we-collect',
    title: '3. How We Collect It',
    blocks: [
      [
        'When you fill a form on this website, including the Careers application form.',
        'When you message us on WhatsApp, call us, or email us.',
        'When you use the chat widget on this website.',
        'Automatically, through cookies and analytics when you browse the site.',
      ],
    ],
  },
  {
    id: 'why-we-use-it',
    title: '4. Why We Use Your Information',
    blocks: [
      'We use your information for these purposes only:',
      [
        'To prepare and share insurance quotes for your vehicle.',
        'To help you buy, renew or make changes to a policy.',
        'To remind you before your policy expires.',
        'To assist you during a claim, including coordinating with the insurance company.',
        'To answer your questions over phone, WhatsApp or email.',
        'To review and respond to job applications submitted through our Careers page.',
        'To understand how our website is used, so we can improve it.',
        'To meet legal, regulatory and record-keeping requirements that apply to insurance intermediaries in India.',
      ],
      'We do not sell your personal information to anyone, and we do not share your contact details with unrelated third parties for their own marketing.',
    ],
  },
  {
    id: 'who-we-share-with',
    title: '5. Who We Share It With',
    blocks: [
      'To do our job, we sometimes need to pass your information on. We share only what is necessary, and only with:',
      [
        'Insurance companies and insurance marketplaces - including Policybazaar, through whom we are an authorized agent - so that a quote can be generated and a policy issued in your name.',
        'Service providers who run parts of our website - for example, our form handling service (Web3Forms), our chat and messaging provider (AuthKey), our website host (Vercel), and our analytics provider (Google Analytics). They process data on our behalf and are not allowed to use it for their own purposes.',
        'Legal and regulatory authorities - if we are required to share information by law, by a court, or by a regulator such as the IRDAI.',
      ],
      'Once your details reach an insurance company or Policybazaar, their own privacy policy also applies to how they handle your data.',
    ],
  },
  {
    id: 'cookies',
    title: '6. Cookies and Analytics',
    blocks: [
      'This website uses Google Analytics 4 to understand how visitors use our pages - for example, which pages are most read and where visitors come from. This uses cookies and similar technology, and collects data such as your approximate location, device type and pages viewed.',
      'This data is used in aggregate. We do not use it to identify you personally. You can block or delete cookies from your browser settings at any time; the website will still work.',
      'If we run ads on Google or Meta (Facebook and Instagram) in the future, those platforms may also set cookies to measure whether an ad led to a visit or an enquiry. Any such use will follow the same principles set out in this policy.',
    ],
  },
  {
    id: 'how-long',
    title: '7. How Long We Keep It',
    blocks: [
      'We keep your information only as long as we need it:',
      [
        'Quote enquiries that do not result in a policy - up to 2 years, so we can follow up at your next renewal.',
        'Customer and policy records - for as long as you are our customer, and afterwards for the period required under Indian insurance and tax laws.',
        'Job applications - up to 1 year, in case a suitable role opens up.',
        'Website analytics data - as per the retention settings of Google Analytics.',
      ],
      'You can ask us to delete your data earlier - see Section 9.',
    ],
  },
  {
    id: 'security',
    title: '8. How We Protect It',
    blocks: [
      'This website is served over a secure HTTPS connection. Access to customer records is limited to SafeDrive and the people who need it to serve you. Documents you send us are stored in access-controlled storage.',
      'No system on the internet is completely secure, and we cannot promise absolute security. If a breach ever affects your information, we will inform you and the relevant authority as required by law.',
    ],
  },
  {
    id: 'your-rights',
    title: '9. Your Rights and Choices',
    blocks: [
      'Under Indian data protection law, including the Digital Personal Data Protection Act, 2023, you can ask us to:',
      [
        'Tell you what personal information we hold about you.',
        'Correct anything that is wrong or out of date.',
        'Delete your information, where we are not required by law to keep it.',
        'Stop sending you renewal reminders or promotional messages.',
        'Withdraw consent you gave earlier, at any time.',
      ],
      'To make any of these requests, contact us using the details in Section 13. We will respond within a reasonable time, normally within 30 days. If you are not satisfied with our response, you may raise a complaint with the Data Protection Board of India.',
    ],
  },
  {
    id: 'children',
    title: '10. Children',
    blocks: [
      'Our services are meant for people aged 18 and above. We do not knowingly collect personal information from children. If you believe a child has shared information with us, please contact us and we will delete it.',
    ],
  },
  {
    id: 'third-party-links',
    title: '11. Links to Other Websites',
    blocks: [
      'Our website may link to other websites, such as an insurance company or a payment page. We are not responsible for how those websites handle your data. Please read their privacy policies before sharing information with them.',
    ],
  },
  {
    id: 'changes',
    title: '12. Changes to This Policy',
    blocks: [
      'We may update this policy from time to time - for example, if we add a new service or a new tool to the website. The updated version will always be available on this page with a new "Last updated" date at the top.',
    ],
  },
];

export default function PrivacyPage() {
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
      <section className="max-w-[820px] mx-auto px-4 md:px-6 pt-14 pb-8">
        <span className="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal">
          Legal
        </span>
        <h1 className="font-montserrat font-bold text-3xl md:text-4xl leading-[1.2] text-teal-dark mt-3">
          Privacy Policy
        </h1>
        <p className="font-opensans text-sm text-slate-400 mt-3">
          Last updated: {LAST_UPDATED}
        </p>
        <p className="font-opensans text-[17px] text-slate-500 mt-5 leading-relaxed">
          In short: we collect your details only to give you a quote, issue or renew
          your policy, and help you at claim time. We do not sell your data. You can
          ask us to delete it any time.
        </p>
      </section>

      {/* Sections */}
      <section className="max-w-[820px] mx-auto px-4 md:px-6 pb-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="mt-10 scroll-mt-24">
            <h2 className="font-montserrat font-bold text-xl md:text-2xl text-teal-dark">
              {s.title}
            </h2>
            {s.blocks.map((block, i) =>
              Array.isArray(block) ? (
                <ul key={i} className="mt-3 space-y-2 list-disc pl-5">
                  {block.map((item) => (
                    <li
                      key={item}
                      className="font-opensans text-[15px] text-slate-600 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  key={i}
                  className="font-opensans text-[15px] text-slate-600 leading-relaxed mt-3"
                >
                  {block}
                </p>
              )
            )}
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="bg-teal/5 py-14 mt-6">
        <div className="max-w-[820px] mx-auto px-4 md:px-6">
          <h2 className="font-montserrat font-bold text-xl md:text-2xl text-teal-dark">
            13. Contact Us
          </h2>
          <p className="font-opensans text-[15px] text-slate-600 leading-relaxed mt-3">
            For any question about this policy, or to access, correct or delete your
            information, reach out to us:
          </p>
          <div className="bg-white rounded-2xl p-6 mt-5 space-y-2.5">
            <p className="font-opensans text-[15px] text-slate-600">
              <span className="font-semibold text-teal-dark">SafeDrive Insurance</span>
            </p>
            <p className="font-opensans text-[15px] text-slate-600">
              House No. 32, Krishna Colony, Khirva Road,
              <br />
              Behind Maharaja Restaurant, Meerut, Uttar Pradesh 250001, India
            </p>
            <p className="font-opensans text-[15px] text-slate-600">
              Email:{' '}
              <a
                href="mailto:contact@safedriveinsurance.in"
                className="text-teal font-semibold hover:underline"
              >
                contact@safedriveinsurance.in
              </a>
            </p>
            <p className="font-opensans text-[15px] text-slate-600">
              WhatsApp:{' '}
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal font-semibold hover:underline"
              >
                {contact.whatsappDisplay}
              </a>
            </p>
            <p className="font-opensans text-[15px] text-slate-600">
              Phone:{' '}
              <a
                href={contact.callHref}
                className="text-teal font-semibold hover:underline"
              >
                {contact.callDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
