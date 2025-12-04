
const features = [
  {
    icon: '/icons/stackable_discounts.png',
    title: 'Stackable & Tiered Discounts',
    desc: 'Run promotions that stack intelligently at the SKU or order level with built-in priority rules.'
  },
  {
    icon: '/icons/inclusion_exclusion_rules.png',
    title: 'Dynamic Inclusion/Exclusion Rules',
    desc: 'Auto-apply rules based on attributes like style, color, or size: no need to manually update collections.'
  },
  {
    icon: '/icons/dashboard.png',
    title: 'Marketing-Friendly Admin Dashboard',
    desc: 'Easily configure, schedule, and reuse campaigns without developer support.'
  },
  {
    icon: '/icons/discount_promotion_types.png',
    title: 'Diverse Promotion Types',
    desc: 'Support for percentage off, fixed amount, BOGO, conditional discounts, and SKU-specific free shipping.'
  },
  {
    icon: '/icons/full_funnel_integration.png',
    title: 'Full-Funnel Integration',
    desc: 'Show clear promotion messaging across product pages, category pages, cart, and checkout in real time.'
  }
];

function Features() {
  return (
    <section id="features" className="features" style={{background: '#fff', padding: '70px 0px 70px 0px', fontFamily: 'Poppins, sans-serif'}}>
      <h2 style={{fontSize: '2.6rem', fontWeight: 700, color: '#222', textAlign: 'center', marginBottom: 20, fontFamily: 'Poppins, sans-serif'}}>App Features: What makes it stand out?</h2>
      <div style={{ maxWidth: 1280, margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 36, marginBottom: 36 }}>
          {features.slice(0,2).map((f, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 20,
              boxShadow: '0 2px 12px rgba(67,234,109,0.08)',
              padding: '36px 32px',
              textAlign: 'center',
              border: '1.5px solid #eee',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 18,
              minWidth: 280,
              maxWidth: 340,
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
                <img src={f.icon} alt={f.title + ' icon'} style={{width: 60, height: 60, objectFit: 'contain'}} />
              </div>
              <div style={{fontSize: '1.25rem', fontWeight: 600, color: '#222', marginBottom: 8, fontFamily: 'Poppins, sans-serif'}}>{f.title}</div>
              <div style={{fontSize: '1rem', color: '#444', fontWeight: 400, fontFamily: 'Poppins, sans-serif'}}>{f.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36 }}>
          {features.slice(2).map((f, i) => (
            <div key={i+2} style={{
              background: '#fff',
              borderRadius: 20,
              boxShadow: '0 2px 12px rgba(67,234,109,0.08)',
              padding: '36px 32px',
              textAlign: 'center',
              border: '1.5px solid #eee',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 18,
              minWidth: 280,
              maxWidth: 340,
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
                <img src={f.icon} alt={f.title + ' icon'} style={{width: 60, height: 60, objectFit: 'contain'}} />
              </div>
              <div style={{fontSize: '1.25rem', fontWeight: 600, color: '#222', marginBottom: 8, fontFamily: 'Poppins, sans-serif'}}>{f.title}</div>
              <div style={{fontSize: '1rem', color: '#444', fontWeight: 400, fontFamily: 'Poppins, sans-serif'}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
