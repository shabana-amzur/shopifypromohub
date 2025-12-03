
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
    <section className="benefits" style={{background: '#f5f3ff', padding: '70px 0px 70px 0px', fontFamily: 'Poppins, sans-serif'}}>
      <h2 style={{fontSize: '2.6rem', fontWeight: 700, color: '#222', textAlign: 'center', marginBottom: 20, fontFamily: 'Poppins, sans-serif'}}>App Benefits: What do you gain?</h2>
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
            color: '#222',
          }}>
            <div style={{
              background: '#f5f3ff',
              borderRadius: 12,
              width: 70,
              height: 70,
              padding: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 8,
              fontSize: '2rem',
              overflow: 'hidden',
            }}>
              <img src={b.icon} alt={b.title + ' icon'} style={{width: 60, height: 60, objectFit: 'contain'}} />
            </div>
            <div style={{fontSize: '1.25rem', fontWeight: 600, color: '#222', marginBottom: 8, fontFamily: 'Poppins, sans-serif'}}>{b.title}</div>
            <div style={{fontSize: '1rem', color: '#444', fontWeight: 400, fontFamily: 'Poppins, sans-serif'}}>{b.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
