import React from 'react';
import Image from 'next/image';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container" style={{ textAlign: 'center' }}>
        {(() => {
          const src = encodeURI('https://www.patternplease.com/centerLogo.webp');
          return <Image src={src} alt="Pattern Please center logo" width={120} height={80} unoptimized />;
        })()}

        <p>Pattern Please! Copyright 2010 and beyond</p>
        <p>
          <a href="about-me.htm">About Me</a> | <a href="contact.htm">Contact Me</a> | <a href="privacy-policy.htm">Privacy Policy</a> | <a href="ordering-shipping.htm">Ordering & Shipping</a>
        </p>
      </div>
    </footer>
  );
}
