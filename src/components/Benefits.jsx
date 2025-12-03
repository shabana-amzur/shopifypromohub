
const benefits = [
  {
    icon: '🚀',
    title: 'Faster Launches',
    desc: 'Get your product in front of customers quickly and efficiently.'
  },
  {
    icon: '📈',
    title: 'Grow Your Audience',
    desc: 'Build a list of interested users before you launch.'
  },
  {
    icon: '💡',
    title: 'Insightful Analytics',
    desc: 'Track signups and engagement to optimize your launch.'
  },
  {
    icon: '🤝',
    title: 'Community Support',
    desc: 'Engage with early adopters and gather feedback.'
  }
];

function Benefits() {
  return (
    <section className="benefits" style={{background: '#fff', padding: '60px 0'}}>
      <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#43ea6d', textAlign: 'center', marginBottom: 40}}>Benefits</h2>
      <div className="benefits-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32, maxWidth: 900, margin: '0 auto'}}>
        {benefits.map((b, i) => (
          <div key={i} style={{background: '#f7fff7', borderRadius: 20, boxShadow: '0 2px 12px rgba(255,152,0,0.08)', padding: 32, textAlign: 'center', border: '2px solid #ff9800'}}>
            <div style={{fontSize: '2.5rem', marginBottom: 18}}>{b.icon}</div>
            <h3 style={{fontSize: '1.2rem', fontWeight: 600, marginBottom: 12, color: '#222'}}>{b.title}</h3>
            <p style={{fontSize: '1rem', color: '#444'}}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
