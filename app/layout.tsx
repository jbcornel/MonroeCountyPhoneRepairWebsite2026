import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import './legacy.css';

import BootstrapClient from '@/components/layout/BootstrapClient';
import HeaderNav from '@/components/layout/HeaderNav';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BootstrapClient />
        <HeaderNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
