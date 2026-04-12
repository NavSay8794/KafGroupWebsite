import './globals.css';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'KAF Groups | Premium Fresh Produce & Worldwide Distribution',
  description:
    'KAF Groups supplies premium fresh fruits, vegetables, and specialty products with international packaging, cold-chain logistics, and global vendor partnerships.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
