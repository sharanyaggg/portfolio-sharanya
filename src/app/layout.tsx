import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Sharanya Gangadharappa | Data Engineer & Analyst | Texas, USA';
const description =
  'Data Engineer and Analyst skilled in ETL pipelines, BI dashboards, and cloud analytics using Python, SQL, Power BI, AWS, and Azure.';
const url = 'https://sharanyaggg.vercel.app'; // update after deploying

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Data Engineer',
    'Data Analyst',
    'ETL Pipelines',
    'Power BI',
    'Python',
    'SQL',
    'AWS',
    'Azure',
    'Tableau',
  ],
  creator: 'Sharanya Gangadharappa',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: 'Sharanya Gangadharappa Portfolio',
    images: [
      {
        url: '/images/open-graph-sharanya.png', // replace with your OG image if available
        width: 1200,
        height: 630,
        alt: 'Sharanya Gangadharappa Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@sharanyaggg', // optional, can remove if you don’t have Twitter
    images: '/images/open-graph-sharanya.png',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-analytics-script">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
