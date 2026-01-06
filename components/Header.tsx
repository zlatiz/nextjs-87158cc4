import React from 'react';
import Image from 'next/image';

export default function Header(): JSX.Element {
  const navLinks: { href: string; label?: string }[] = [
    { href: 'index.htm', label: 'Home' },
    { href: 'about-me.htm', label: 'About Me' },
    { href: 'ornament-pattern.htm', label: 'FREE Patterns' },
    { href: 'contact.htm', label: 'Contact' }
  ];

  const kitLinks: { href: string; label: string }[] = [
    { href: 'supplies.htm', label: 'Supplies' },
    { href: 'christmas-ornament-kits.htm', label: 'Christmas' },
    { href: 'valentine-ornament-kits.htm', label: "Valentine's Day" },
    { href: 'spring-ornament-kits.htm', label: 'Spring and Floral' },
    { href: 'crazy-colors-kits.htm', label: 'Crazy Colors' },
    { href: 'easter-ornament-kits.htm', label: 'Easter' },
    { href: 'fourth-of-july-kits.htm', label: 'Patriotic' },
    { href: 'fall-ornament-kits.htm', label: 'Fall and Halloween' },
    { href: 'Special-Occasions.htm', label: 'Special Occasions' },
    { href: 'pic-ornament-kits.htm', label: 'Picture Ornaments' }
  ];

  return (
    <header>
      <div className="header-bar" />
      <div className="header-nav container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="brand">Pattern Please</div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          {(Array.isArray(navLinks) ? navLinks : []).map((l) => (
            <a key={l.href} href={l.href}>{l.label ?? l.href}</a>
          ))}

          <div className="dropdown">
            <details>
              <summary>Ornament Kits</summary>
              <div className="dropdown-menu">
                {(Array.isArray(kitLinks) ? kitLinks : []).map((k) => (
                  <a key={k.href} href={k.href}>{k.label}</a>
                ))}
                <a href="gallery.htm">Retired Kits</a>
              </div>
            </details>
          </div>

          <a href="christmas/Complete-Kit.htm">Complete Kit</a>
          <a href="https://www.pinterest.com/patternplease/pattern-please/">Pinterest</a>

          <div data-custom-element="paypal-cart-button" data-id="pp-view-cart" style={{ marginLeft: '0.5rem' }}>
            <a href="index.htm">View Cart</a>
          </div>
        </nav>
      </div>
      <div className="header-bar" />
    </header>
  );
}
