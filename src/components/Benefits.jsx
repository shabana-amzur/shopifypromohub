
const benefits = [
  {
    icon: '/icons/one app.png',
    title: 'One App, No Chaos',
    desc: 'Replace multiple third-party tools with a single, tailored Shopify app.'
  },
  {
    icon: '/icons/faster.png',
    title: 'Faster Campaigns',
    desc: 'Launch promotions 60% quicker with ready-to-use templates and automation.'
  },
  {
    icon: '/icons/best-customer-experience.png',
    title: 'Better Customer Experience',
    desc: 'Customers see consistent promotion messaging throughout their journey, avoiding surprises at checkout.'
  },
  {
    icon: '/icons/cart value.png',
    title: 'Higher Cart Value',
    desc: 'Encourage bigger orders with personalized, tiered, and conditional offers.'
  },
  {
    icon: '/icons/growth.png',
    title: 'Ready for Growth',
    desc: 'Scales with your retail strategy without slowing down your site.'
  }
];



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
              background: '#f5f3ff',
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
            }}>
              <img src={b.icon} alt={b.title + ' icon'} style={{width: 45, height: 45, objectFit: 'contain'}} />
            </div>
            <div style={{fontSize: '1.25rem', fontWeight: 600, color: '#a259ff', marginBottom: 8, fontFamily: 'Poppins, sans-serif'}}>{b.title}</div>
            <div style={{fontSize: '1rem', color: '#ccc', fontWeight: 400, fontFamily: 'Poppins, sans-serif'}}>{b.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
