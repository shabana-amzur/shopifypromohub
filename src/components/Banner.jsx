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
      <div style={{
        width: '100%',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        fontFamily: 'Poppins, Inter, sans-serif',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #8f6fff 0%, #6f4aff 100%)',
          borderRadius: 32,
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          maxWidth: 820,
          width: '100%',
          padding: '64px 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 32,
        }}>
          <h1 style={{fontSize: '2.8rem', fontWeight: 700, margin: 0, color: '#fff', textAlign: 'center', lineHeight: 1.15, fontFamily: 'Poppins, Inter, sans-serif'}}>
            Learn who we are<br />
            Build what matters together
          </h1>
          <div style={{display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 8}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: '1.08rem'}}>
              <span style={{display: 'inline-block', width: 18, height: 18, background: '#43ea6d', borderRadius: '50%', marginRight: 6}}></span>
              Driven by purpose
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: '1.08rem'}}>
              <span style={{display: 'inline-block', width: 18, height: 18, background: '#43ea6d', borderRadius: '50%', marginRight: 6}}></span>
              Human-first, always
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: '1.08rem'}}>
              <span style={{display: 'inline-block', width: 18, height: 18, background: '#43ea6d', borderRadius: '50%', marginRight: 6}}></span>
              Built for real impact
            </div>
          </div>
          <form style={{display: 'flex', width: '100%', maxWidth: 420, gap: 0, marginTop: 12, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(67,234,109,0.08)', padding: 6}}>
            <input type="email" placeholder="Your email" style={{flex: 1, padding: '16px 18px', borderRadius: 8, border: 'none', fontSize: '1.08rem', fontFamily: 'Poppins, Inter, sans-serif', outline: 'none'}} />
            <button type="submit" style={{background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '0 32px', fontWeight: 600, fontSize: '1.08rem', cursor: 'pointer', fontFamily: 'Poppins, Inter, sans-serif', marginLeft: 8}}>Join Our Story →</button>
          </form>
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
          {showVideo && (
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
          )}
      </div>
    </section>
  );
}

export default Banner;
