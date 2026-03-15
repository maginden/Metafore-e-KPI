import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Social KPI Master',
  description: 'Impara le metriche del Social Media Marketing con metafore e vignette',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="it" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
