
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
      <section
        className="banner"
        style={{
          background: 'url(/banner-bg.jpg) center center/cover no-repeat',
          minHeight: '700px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          position: 'relative',
          padding: '0',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            width: '100%',
            minHeight: '700px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            fontFamily: 'Poppins, Inter, sans-serif',
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 32,
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
              maxWidth: 600,
              width: '100%',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 28,
            }}
          >
            <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: 0, color: '#222', lineHeight: 1.1 }}>
              Smarter<br />Promotions on Shopify,<br />
              <span style={{ color: '#43ea6d' }}>All-in-One App.</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#222', margin: '18px 0 0 0', fontWeight: 400 }}>
              Join the waitlist to get early access and exclusive updates<br />when we launch on Shopify Marketplace.
            </p>
            <form style={{ display: 'flex', gap: 12, width: '100%', maxWidth: 400, marginTop: 18 }}>
              <input type="email" placeholder="you@yourmail.com" style={{ flex: 1, padding: '16px 18px', borderRadius: 8, border: '1px solid #ccc', fontSize: '1.08rem', fontFamily: 'Poppins, Inter, sans-serif', outline: 'none' }} />
              <button type="submit" style={{ background: '#ff9800', color: '#fff', border: 'none', borderRadius: 8, padding: '0 32px', fontWeight: 600, fontSize: '1.08rem', cursor: 'pointer', fontFamily: 'Poppins, Inter, sans-serif' }}>
                Join now
              </button>
            </form>
          </div>
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
            <div
              style={{ position: 'relative', width: '90vw', maxWidth: 720 }}
              onClick={e => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="405"
                src="https://www.youtube.com/embed/0ZAAQGUqua0?autoplay=1"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setShowVideo(false)}
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  background: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  fontSize: 22,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>
    );
  }

  export default Banner;
