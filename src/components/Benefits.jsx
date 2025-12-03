
const benefits = [
  {
    icon: 'calculator',
    title: 'One App, No Chaos',
    desc: 'Replace multiple third-party tools with a single, tailored Shopify app.'
  },
  {
    icon: 'campaign',
    title: 'Faster Campaigns',
    desc: 'Launch promotions 60% quicker with ready-to-use templates and automation.'
  },
  {
    icon: 'customer',
    title: 'Better Customer Experience',
    desc: 'Customers see consistent promotion messaging throughout their journey, avoiding surprises at checkout.'
  },
  {
    icon: 'cart',
    title: 'Higher Cart Value',
    desc: 'Encourage bigger orders with personalized, tiered, and conditional offers.'
  },
  {
    icon: 'growth',
    title: 'Ready for Growth',
    desc: 'Scales with your retail strategy without slowing down your site.'
  }
];

function getBenefitIcon(name) {
  const icons = {
    calculator: (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#a259ff" strokeWidth="2"/><rect x="8" y="8" width="8" height="8" rx="2" stroke="#a259ff" strokeWidth="2"/><circle cx="10" cy="10" r="1" fill="#a259ff"/><circle cx="14" cy="10" r="1" fill="#a259ff"/><rect x="10" y="12" width="4" height="2" rx="1" fill="#a259ff"/></svg>
    ),
    campaign: (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#a259ff" strokeWidth="2"/><rect x="8" y="8" width="8" height="8" rx="2" stroke="#a259ff" strokeWidth="2"/><rect x="10" y="10" width="4" height="2" rx="1" fill="#a259ff"/></svg>
    ),
    customer: (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#a259ff" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="#a259ff" strokeWidth="2"/><rect x="9" y="14" width="6" height="2" rx="1" fill="#a259ff"/></svg>
    ),
    cart: (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#a259ff" strokeWidth="2"/><rect x="8" y="10" width="8" height="4" rx="2" stroke="#a259ff" strokeWidth="2"/><rect x="10" y="14" width="4" height="2" rx="1" fill="#a259ff"/></svg>
    ),
    growth: (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#a259ff" strokeWidth="2"/><path d="M8 16l4-4 4 4" stroke="#a259ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  };
  return icons[name] || null;
}

function Benefits() {
  return (
    <section className="benefits" style={{background: '#18171d', padding: '70px 0', fontFamily: 'Poppins, sans-serif'}}>
      <h2 style={{fontSize: '2.6rem', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 32, fontFamily: 'Poppins, sans-serif'}}>App Benefits: What do you gain?</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        maxWidth: 1280,
        margin: '0 auto',
        fontFamily: 'Poppins, sans-serif',
      }}>
        {benefits.map((b, i) => (
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
              background: 'rgba(162,89,255,0.08)',
              borderRadius: 12,
              width: 64,
              height: 64,
              padding: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
              fontSize: '2rem',
              overflow: 'hidden',
            }}>{getBenefitIcon(b.icon)}</div>
            <div style={{fontSize: '1.25rem', fontWeight: 600, color: '#a259ff', marginBottom: 8, fontFamily: 'Poppins, sans-serif'}}>{b.title}</div>
            <div style={{fontSize: '1rem', color: '#ccc', fontWeight: 400, fontFamily: 'Poppins, sans-serif'}}>{b.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
