
import React, { useState } from 'react';


const navLinks = [
  { label: 'Demo', href: '#demo' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Join', href: '#join' },
];

function Banner() {
  // Removed play button, lightbox, and shock animation

  return (
    <section id="banner" style={{
      width: '100%',
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      zIndex: 1,
      fontFamily: 'Poppins, Inter, sans-serif',
      background: 'url(/banner-bg.jpg) center center / cover no-repeat',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        maxWidth: 480,
        width: '100%',
        padding: '56px 44px 44px 44px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
        marginLeft: 96,
        fontFamily: 'Poppins, Inter, sans-serif',
      }}>
        <h1 style={{ fontSize: '3.2rem', fontWeight: 700, margin: 0, color: '#222', lineHeight: 1.1, fontFamily: 'Poppins, Inter, sans-serif' }}>
          Smarter Promotions on<br />Shopify,<br />
          <span style={{ color: '#43ea6d' }}>All-in-One App.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#444', margin: '8px 0 0 0', fontFamily: 'Inter, Poppins, sans-serif' }}>
          Join the waitlist to get early access and exclusive updates when we launch on Shopify Marketplace.
        </p>
        <form style={{ display: 'flex', width: '100%', gap: 8, margin: '18px 0 0 0' }}>
          <input type="email" placeholder="you@yourmail.com" style={{ flex: 1, padding: '12px 16px', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem', fontFamily: 'Inter, Poppins, sans-serif' }} />
          <button type="submit" style={{ background: '#ff9800', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 22px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Poppins, Inter, sans-serif' }}>Join now</button>
        </form>
      </div>
      {/* Play button, lightbox, and shock animation removed as requested */}
    </section>
  );
}

export default Banner;
