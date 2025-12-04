import React from 'react';

function OverviewSection() {
  return (
    <section id="overview" style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '64px 0',
      background: '#fff',
    }}>
      <div style={{ flex: 1, maxWidth: 540, padding: '0 48px' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#222', marginBottom: 24 }}>Forget juggling apps or messy manual hacks.</h2>
        <p style={{ fontSize: '1.15rem', color: '#444', marginBottom: 18 }}>
          Run every promotion with one powerful custom Shopify app built for retail.<br /><br />
          Shopify’s built-in discount features often don’t keep up with the needs of retailers who run complex, layered promotions. If you’re using multiple apps just to launch one campaign or relying on manual workarounds, there’s a better way.<br /><br />
          Amzur’s Shopify development team has built a custom app that gives marketing teams the freedom to run advanced promotions at scale. No coding, no patchwork of plugins, just complete control. It’s part of our larger Shopify development services, designed to give retailers exactly what they need.
        </p>
      </div>
      <div style={{ flex: 1, maxWidth: 540, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 48px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: 480, aspectRatio: '16/9', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', borderRadius: 16, overflow: 'hidden', background: '#000' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0ZAAQGUqua0"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: 16 }}
          />
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
