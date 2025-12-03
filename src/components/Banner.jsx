

const navLinks = [
  { label: 'Demo', href: '#demo' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Join', href: '#join' },
];

function Banner() {
  return (
    <section className="banner" style={{
      background: 'url(/banner-bg.jpg) center center/cover no-repeat',
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      padding: '0',
      flexDirection: 'column',
    }}>
      {/* White header with logo left and nav right */}
      <header style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(255,255,255,0.98)',
        padding: '0 48px',
        height: 72,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        boxSizing: 'border-box',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
      }}>
        <img src="/logo.png" alt="Logo" style={{height: 38}} />
        <nav>
          <ul style={{display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0}}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} style={{color: '#222', fontWeight: 500, fontSize: '1.05rem', textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'background 0.2s'}}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div style={{
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        maxWidth: 440,
        width: '100%',
        padding: '56px 44px 44px 44px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
        marginLeft: 96,
        marginTop: 140,
        zIndex: 1,
      }}>
        <h1 style={{fontSize: '2.1rem', fontWeight: 700, margin: 0, color: '#222', lineHeight: 1.15}}>
          Smarter Promotions on Shopify,<br />
          <span style={{color: '#43ea6d'}}>All-in-One App.</span>
        </h1>
        <p style={{fontSize: '1.1rem', color: '#444', margin: '8px 0 0 0'}}>Join the waitlist to get early access and exclusive updates when we launch on Shopify Marketplace.</p>
        <form style={{display: 'flex', width: '100%', gap: 8, margin: '18px 0 0 0'}}>
          <input type="email" placeholder="you@yourmail.com" style={{flex: 1, padding: '12px 16px', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem'}} />
          <button type="submit" style={{background: '#ff9800', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 22px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'}}>Join now</button>
        </form>
      </div>
    </section>
  );
}

export default Banner;
