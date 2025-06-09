import Script from 'next/script';

export const metadata = {
  title: 'Germany Opportunity Card – Work & Settle in Germany | VJCMETA ',
    description: 'Apply for Germany`s Opportunity Card to work & settle in Germany. Check eligibility, benefits & process with VJC Overseas. Start today! ',
    keywords: 'job seeker visa germany,immigration consultants,germany work visa,opportunity card germany,germany work permit,germany visa,germany opportunity card,germany study visa,visa consultant near me,job search visa germany,germany job visa,germany employment visa,germany work permit visa,germany work seeker visa',
};

export default function ContactLayout({ children }) {
  return (
    <>
      {/* Google Global site tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
        strategy="afterInteractive"
        async
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16767451796');
        `}
      </Script>

      {children}
    </>
  );
}
