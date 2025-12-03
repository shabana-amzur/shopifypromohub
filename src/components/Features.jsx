
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
    <section className="features" style={{background: '#f7fff7', padding: '60px 0'}}>
      <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#ff9800', textAlign: 'center', marginBottom: 40}}>Features</h2>
      <div className="features-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32, maxWidth: 900, margin: '0 auto'}}>
        {features.map((f, i) => (
          <div key={i} style={{background: '#fff', borderRadius: 20, boxShadow: '0 2px 12px rgba(67,234,109,0.08)', padding: 32, textAlign: 'center', border: '2px solid #43ea6d'}}>
            <div style={{fontSize: '2.5rem', marginBottom: 18}}>{f.icon}</div>
            <h3 style={{fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#222'}}>{f.title}</h3>
            <p style={{fontSize: '1rem', color: '#444'}}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
