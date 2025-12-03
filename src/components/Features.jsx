
const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="24" height="16" rx="4" stroke="#fff" strokeWidth="2"/>
        <path d="M14 20l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Stackable & Tiered Discounts',
    desc: 'Run promotions that stack intelligently at the SKU or order level with built-in priority rules.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="20" height="20" rx="4" stroke="#fff" strokeWidth="2"/>
        <circle cx="20" cy="20" r="3" stroke="#fff" strokeWidth="2"/>
        <rect x="16" y="16" width="8" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
    title: 'Dynamic Inclusion/Exclusion Rules',
    desc: 'Auto-apply rules based on attributes like style, color, or size: no need to manually update collections.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="24" height="16" rx="4" stroke="#fff" strokeWidth="2"/>
        <rect x="8" y="24" width="24" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
        <circle cx="32" cy="28" r="2" fill="#fff"/>
      </svg>
    ),
    title: 'Marketing-Friendly Admin Dashboard',
    desc: 'Easily configure, schedule, and reuse campaigns without developer support.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="20" height="20" rx="4" stroke="#fff" strokeWidth="2"/>
        <path d="M20 14v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 20h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Diverse Promotion Types',
    desc: 'Support for percentage off, fixed amount, BOGO, conditional discounts, and SKU-specific free shipping.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="24" height="16" rx="4" stroke="#fff" strokeWidth="2"/>
        <path d="M12 24l8-8 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full-Funnel Integration',
    desc: 'Show clear promotion messaging across product pages, category pages, cart, and checkout in real time.'
  }
];

function Features() {
  return (
    <section className="features" style={{background: '#fff', padding: '70px 0'}}>
      <h2 style={{fontSize: '2.6rem', fontWeight: 700, color: '#fff', textAlign: 'left', marginBottom: 32, fontFamily: 'Poppins, Inter, sans-serif'}}>App Features: What makes it stand out?</h2>
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
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 18,
            boxShadow: '0 2px 12px rgba(67,234,109,0.08)',
            padding: '32px 28px',
            textAlign: 'left',
            border: '1.5px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 16,
            minHeight: 180,
            color: '#fff',
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 12,
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
              fontSize: '2rem',
            }}>{f.icon}</div>
            <div style={{fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: 8}}>{f.title}</div>
            <div style={{fontSize: '1rem', color: '#ccc', fontWeight: 400}}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
