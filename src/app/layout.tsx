import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NC Delights | Sweet treats made with care',
  description: 'Handcrafted cookies, crinkles, banana bread, and sweet treats from NC Delights.',
  metadataBase: new URL('https://ncdelights.vercel.app'),
  openGraph: {
    title: 'NC Delights | Sweet treats made with care',
    description: 'Small-batch cookies, loaves, and comforting sweet treats.',
    type: 'website',
    images: [{ url: '/assets/products/cookies-collection.jpeg', width: 1200, height: 900, alt: 'A collection of NC Delights cookies' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
