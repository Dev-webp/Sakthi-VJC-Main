import { Metadata } from 'next';
import { Inter, PT_Serif, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import FloatingWhatsApp from '@/app/components/FloatingWhatsapp';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import TawkToChat from '@/app/components/TawkToChat';
import Popupform from '@/app/components/Popupform';
import EligibilityBanner from "@/app/components/EligibilityBanner";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Best Visa Immigration Consultants in Hyderabad Bangalore PR Visa| Study Visa| Job Seeker Visa| Visit Visa| Investor Visa| Tourist Visa| Dependent Visa| Work Permit Visa',
  description: 'Best Visa Immigration Consultants in Hyderabad and Bangalore Process for PR Visa, Study Visa, Job Seeker Visa, Visit Visa, Investor Visa, Tourist Visa, Dependent Visa, Work Permit Visa and much more...',
  keywords: 'Best Visa Immigration Consultants in Hyderabad, Best Immigration Visa Consultants in Bangalore, PR Visa, Germany Opportunity Card, Study Visa, Job Seeker Visa, Work Permit Visa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ptSerif.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* ✅ Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16767451796');
          `}
        </Script>

        {/* ✅ Facebook Meta Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){
                  n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
                t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2003555746606868');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: 'Times New Roman' }}>
        {/* ✅ Facebook Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2003555746606868&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Components */}
        <Nav />
        <EligibilityBanner />
        {/* <Popupform /> */}
        {children}
        <FloatingWhatsApp />
        <TawkToChat />
       
        <Footer />
      </body>
    </html>
  );
}
