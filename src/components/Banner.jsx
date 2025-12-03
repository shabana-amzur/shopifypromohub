

import React, { useState } from 'react';

const navLinks = [
  { label: 'Demo', href: '#demo' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Join', href: '#join' },
];

function Banner() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="banner" style={{
      background: 'url(/banner-bg.jpg) center center/cover no-repeat',
      minHeight: '700px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      position: 'relative',
      padding: '0',
      flexDirection: 'column',
    }}>
      {/* White header with logo left and nav right */}
      <header style={{
        width: '100%',
        minHeight: 64,
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 56px',
        borderRadius: 0,
        boxShadow: 'none',
        margin: 0,
        position: 'relative',
        zIndex: 10,
        fontFamily: 'Poppins, Inter, sans-serif',
      }}>
        <img src="/logo.png" alt="Logo" style={{height: 45, marginRight: 32}} />
        <nav>
          <ul style={{display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0, alignItems: 'center'}}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} style={{color: '#222', fontWeight: 500, fontSize: '1.08rem', textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'background 0.2s', fontFamily: 'Poppins, Inter, sans-serif'}}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#join" style={{
                background: '#ff9800',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.08rem',
                textDecoration: 'none',
                padding: '10px 22px',
                borderRadius: 8,
                marginLeft: 12,
                fontFamily: 'Poppins, Inter, sans-serif',
                transition: 'background 0.2s',
                display: 'inline-block',
              }}>Join now</a>
            </li>
          </ul>
        </nav>
      </header>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '700px',
        position: 'relative',
        zIndex: 1,
        fontFamily: 'Poppins, Inter, sans-serif',
      }}>
        {/* Left: White box */}
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
          <h1 style={{fontSize: '3.2rem', fontWeight: 700, margin: 0, color: '#222', lineHeight: 1.1, fontFamily: 'Poppins, Inter, sans-serif'}}>
            Smarter Promotions on<br />Shopify,<br />
            <span style={{color: '#43ea6d'}}>All-in-One App.</span>
          </h1>
          <p style={{fontSize: '1.1rem', color: '#444', margin: '8px 0 0 0', fontFamily: 'Inter, Poppins, sans-serif'}}>Join the waitlist to get early access and exclusive updates when we launch on Shopify Marketplace.</p>
          <form style={{display: 'flex', width: '100%', gap: 8, margin: '18px 0 0 0'}}>
            <input type="email" placeholder="you@yourmail.com" style={{flex: 1, padding: '12px 16px', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem', fontFamily: 'Inter, Poppins, sans-serif'}} />
            <button type="submit" style={{background: '#ff9800', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 22px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', fontFamily: 'Poppins, Inter, sans-serif'}}>Join now</button>
          </form>
        </div>
        {/* Right: Play button */}
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '700px'}}>
          <button
            onClick={() => setShowVideo(true)}
            style={{
              background: 'rgba(255,255,255,0.85)',
              border: 'none',
              borderRadius: '50%',
              width: 90,
              height: 90,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 24px rgba(67,234,109,0.12)',
              cursor: 'pointer',
              animation: 'shock 0.7s infinite',
              outline: 'none',
              position: 'relative',
              transition: 'box-shadow 0.2s',
            }}
          >
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19" cy="19" r="19" fill="#ff9800" />
              <polygon points="15,12 28,19 15,26" fill="#fff" />
            </svg>
            <style>{`
              @keyframes shock {
                0% { box-shadow: 0 0 0 0 #ff980044; }
                70% { box-shadow: 0 0 0 16px #ff980000; }
                100% { box-shadow: 0 0 0 0 #ff980000; }
              }
            `}</style>
          </button>
        </div>
        {/* Lightbox video modal */}
        {showVideo && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.7)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setShowVideo(false)}
          >
            <div style={{position: 'relative', width: '90vw', maxWidth: 720}} onClick={e => e.stopPropagation()}>
              <iframe
                width="100%"
                height="405"
                src="https://www.youtube.com/embed/0ZAAQGUqua0?autoplay=1"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setShowVideo(false)}
                style={{position: 'absolute', top: 8, right: 8, background: '#fff', border: 'none', borderRadius: '50%', width: 36, height: 36, fontSize: 22, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)'}}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Banner;
