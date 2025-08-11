import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const dynamic = 'force-static';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | Blackline Studios',
    default: 'Blackline Studios - Designing products that move business forward',
  },
  description: 'Strategy, Design, and Engineering services to help your business grow. We specialize in Product Strategy, Brand & Visual Design, UX/UI, and Frontend Development.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blacklinestudios.example',
    siteName: 'Blackline Studios',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blackline Studios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
