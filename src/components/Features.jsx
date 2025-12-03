
const features = [
  {
    icon: '📦',
    title: 'Easy Shopify Integration',
    desc: 'Seamlessly connect and launch your product on Shopify Marketplace in minutes.'
  },
  {
    icon: '⚡',
    title: 'Instant Waitlist Setup',
    desc: 'Capture emails and build hype with a frictionless waitlist experience.'
  },
  {
    icon: '🎨',
    title: 'Custom Branding',
    desc: 'Personalize your page with your own colors, logo, and messaging.'
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    desc: 'Your data is protected with enterprise-grade security and privacy.'
  }
];

function Features() {
  return (
    <section className="features" style={{background: '#fff', padding: '70px 0'}}>
      <h2 style={{fontSize: '2.6rem', fontWeight: 700, color: '#222', textAlign: 'center', marginBottom: 32, fontFamily: 'Poppins, Inter, sans-serif'}}>Why Teams <span role="img" aria-label="star">⭐</span> Love Working <span role="img" aria-label="handshake">🤝</span> with PromoHub</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        maxWidth: 1280,
        margin: '0 auto',
        fontFamily: 'Poppins, Inter, sans-serif',
      }}>
        {features.map((f, i) => (
          <div key={i} style={{
            background: '#fff',
            borderRadius: 20,
            boxShadow: '0 2px 12px rgba(67,234,109,0.08)',
            padding: '36px 32px',
            textAlign: 'left',
            border: '1.5px solid #eee',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 18,
            minHeight: 210,
          }}>
            <div style={{
              background: '#f5f3ff',
              borderRadius: 12,
              width: 54,
              height: 54,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
              fontSize: '2.1rem',
            }}>{f.icon}</div>
            <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: 8, color: '#222', fontFamily: 'Poppins, Inter, sans-serif'}}>{f.title}</h3>
            <p style={{fontSize: '1.08rem', color: '#444', margin: 0, fontFamily: 'Inter, Poppins, sans-serif'}}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
