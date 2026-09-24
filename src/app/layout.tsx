import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';
import { SITE_INFO } from '@/lib/data';
import { getLocalBusinessSchema, getPersonSchema } from '@/lib/seo';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#192a3d',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    default: SITE_INFO.title,
    template: '%s | Psikolog Esra Sayın',
  },
  description: SITE_INFO.description,
  alternates: {
    canonical: SITE_INFO.url,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_INFO.url,
    siteName: 'Psikolog Esra Sayın',
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    images: [
      {
        url: '/images/psikolog-esra-sayin-updated-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Psikolog Esra Sayın İstanbul Cihangir',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    images: ['/images/psikolog-esra-sayin-updated-hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'egXPzCMrAlxYA2SCdaoynX7nWPfNiJBjYG6d8h-vw88',
  },
  icons: {
    icon: [
      { url: '/images/fav-icon-esra-sayin.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/images/fav-icon-esra-sayin.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = getLocalBusinessSchema();
  const personSchema = getPersonSchema();

  return (
    <html lang="tr" className={`${plusJakartaSans.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
