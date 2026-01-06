import "./globals.css";
import './globals.css';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="QQ4fqyBh7-gEat6X5WPRgCubK069-UmF_LLC4Ti3yR4" />
        <meta name="google-site-verification" content="UOymqIgZZ5-QbS4dXYoUSMj0a5rp35g9peARH95k4vY" />
        <meta name="p:domain_verify" content="b0c3e310bde2e5a4f060b4aae539f21e" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.patternplease.com/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.patternplease.com/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.patternplease.com/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Pattern Please</title>
        <meta name="description" content="The BEST patterns for learning to make Quilted Ornaments for FREE! Over 190 NO-SEW Quilted Ornament Kits for Christmas, holidays, and special occasions!" />
      </head>
      <body>
        <div className="header-bar" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
