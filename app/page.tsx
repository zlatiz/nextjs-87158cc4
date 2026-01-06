import React from 'react';
import Image from 'next/image';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import Input from '../components/ui/input';

const IMAGES: string[] = [
  'https://www.patternplease.com/index/Christmas-2021-Banner-test.webp',
  'https://www.patternplease.com/index/ownerLogo.webp',
  'https://www.patternplease.com/christmas/c-images/Christmas-Delight-Complete-Kit-1.webp',
  'https://www.patternplease.com/index/patternPic.webp',
  'https://www.patternplease.com/index/supplies-INDEX.webp',
  'https://www.patternplease.com/index/christmas-pic-index.webp',
  'https://www.patternplease.com/index/Fall-Halloween-Homepage-Photo.webp',
  'https://www.patternplease.com/centerLogo.webp',
  'https://www.patternplease.com/apple-touch-icon.png',
  'https://www.patternplease.com/favicon-32x32.png',
  'https://www.patternplease.com/favicon-16x16.png',
  'https://www.patternplease.com/logo.webp'
];

interface Section {
  id: string;
  title: string;
  content: string;
}

const SECTIONS: Section[] = [
  {
    id: 'about',
    title: 'About',
    content: 'You will not only enjoy viewing my gorgeous ornaments, but be able to purchase the kits of fabric and ribbon to make each ornament. Learn to make these beautiful ornaments with my FREE Patterns!'
  }
];

export default function HomePage(): JSX.Element {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const heroImage = images[0] ?? '';
  const gridImages = images.slice(1, 9);
  const galleryImages = images.slice(9);

  return (
    <>
      <section className="hero container">
        <div className="hero-card card">
          <div className="logo-center">
            {/* Centered logo from source */}
            {heroImage && (
              <a href="christmas-ornament-kits.htm">
                {
                  (() => {
                    const safeSrc = encodeURI(heroImage);
                    return (
                      <Image src={safeSrc} alt="Pattern Please Quilted Ornament Banner" width={1200} height={420} unoptimized />
                    );
                  })()
                }
              </a>
            )}
            <h1 style={{ marginTop: '0.75rem' }}>Pattern Please - Quilted Ornament Kits & FREE Patterns</h1>
            <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>
              The BEST patterns for learning to make Quilted Ornaments for FREE! Over 190 NO-SEW Quilted Ornament Kits for Christmas, holidays, and special occasions!
            </p>
          </div>
        </div>
      </section>

      <section className="container" aria-labelledby="intro">
        <div className="card" style={{ marginTop: '1rem' }}>
          <h2 id="intro">Intro</h2>
          {(Array.isArray(SECTIONS) ? SECTIONS : []).map((s) => (
            <div key={s.id}>
              <h3>{s.title}</h3>
              <p>{s.content.replace('FREE Patterns!', 'FREE Patterns!')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container promo" aria-labelledby="promos">
        <h2 id="promos">Promotions</h2>
        <h3>Anytime you buy 5 kits at one time, you get 1 FREE kit*!</h3>
        <h3>Buy 10 kits at one time, you get 3 FREE kits*!</h3>
        <h3>FREE SHIPPING in the USA on orders of $100 or more!</h3>
        <small>*Free kit is any ball kit, up to a $9.95 value</small>
        <br />
        <small>After you order, email me from the <a href="contact.htm">contact page</a> with the exact ornament names for your FREE kits!</small>
      </section>

      <section className="container" aria-labelledby="gallery">
        <h2 id="gallery">Featured Images</h2>
        <div className="grid-3" style={{ marginTop: '0.5rem' }}>
          {(Array.isArray(gridImages) ? gridImages : []).map((img, idx) => {
            const safeSrc = encodeURI(img);
            const alt = `Featured image ${idx + 1}`;
            return (
              <Card key={img} className="card">
                <a href={idx === 0 ? 'about-me.htm' : idx === 1 ? 'christmas/Complete-Kit.htm' : idx === 2 ? 'ornament-pattern.htm' : '#'}>
                  <Image src={safeSrc} alt={alt} width={600} height={420} unoptimized />
                </a>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container" aria-labelledby="categories" style={{ marginTop: '1rem' }}>
        <h2 id="categories">Categories & Supplies</h2>
        <div className="grid-3" style={{ marginTop: '0.5rem' }}>
          <Card className="card">
            <a href="supplies.htm">
              {images[4] && (() => { const safeSrc = encodeURI(images[4]); return <Image src={safeSrc} alt="Supplies Index" width={400} height={300} unoptimized /> })()}
              <h3>Supplies</h3>
            </a>
          </Card>

          <Card className="card">
            <a href="christmas-ornament-kits.htm">
              {images[5] && (() => { const safeSrc = encodeURI(images[5]); return <Image src={safeSrc} alt="Christmas Kits" width={400} height={300} unoptimized /> })()}
              <h3>Christmas Ornament Kits</h3>
            </a>
          </Card>

          <Card className="card">
            <a href="fall-ornament-kits.htm">
              {images[6] && (() => { const safeSrc = encodeURI(images[6]); return <Image src={safeSrc} alt="Fall Kits" width={400} height={300} unoptimized /> })()}
              <h3>Fall Ornament Kits</h3>
            </a>
          </Card>
        </div>
      </section>

      <section className="container" aria-labelledby="more">
        <h2 id="more">Free Patterns & Contact</h2>
        <div className="grid-2" style={{ marginTop: '0.5rem' }}>
          <Card className="card">
            <h3>Learn to make an ornament!</h3>
            <a href="ornament-pattern.htm">FREE PATTERNS</a>
            <div style={{ marginTop: '0.5rem' }}>
              <Button asLink href="ornament-pattern.htm">View FREE Patterns</Button>
            </div>
          </Card>

          <Card className="card">
            <h3>Contact</h3>
            <p>Please use the <a href="contact.htm">contact page</a> for free kit selections after ordering.</p>
            <Input placeholder="Your email" label="Email" />
          </Card>
        </div>
      </section>

      <section className="container" aria-labelledby="pinterest" style={{ marginTop: '1rem' }}>
        <h2 id="pinterest">Pinterest</h2>
        <p>Follow our board:</p>
        <a href="https://www.pinterest.com/patternplease/pattern-please/">https://www.pinterest.com/patternplease/pattern-please/</a>
      </section>

      <section className="container" aria-labelledby="assets" style={{ marginTop: '1rem' }}>
        <h2 id="assets">All Images</h2>
        <div className="grid-3" style={{ marginTop: '0.5rem' }}>
          {(Array.isArray(images) ? images : []).map((img) => {
            const safeSrc = encodeURI(img);
            return (
              <div key={img} className="card">
                <Image src={safeSrc} alt={`Asset ${img.split('/').pop() ?? 'image'}`} width={320} height={220} unoptimized />
                <small style={{ color: 'var(--muted)' }}>{img}</small>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container footer-note" style={{ marginTop: '1rem' }}>
        <p style={{ textAlign: 'center' }}>Pattern Please! Copyright 2010 and beyond</p>
      </section>
    </>
  );
}
