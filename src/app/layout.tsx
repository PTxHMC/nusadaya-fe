import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import { Providers } from './providers';
import { Toaster } from 'sonner';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Nusadaya'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
        <Toaster
          position="top-center"
          richColors
          closeButton
          visibleToasts={1}
          duration={2000}
        />
      </body>
    </html>
  );
}
