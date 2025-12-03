
// Use public directory for images

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
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      padding: '0',
    }}>
      <nav style={{
        position: 'absolute',
        top: 32,
        left: 48,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 32,
        zIndex: 2,
      }}>
        <img src="/logo.png" alt="Logo" style={{height: 32}} />
        <ul style={{display: 'flex', gap: 24, listStyle: 'none', margin: 0, padding: 0}}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{color: '#fff', fontWeight: 500, fontSize: '1rem', textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'background 0.2s'}}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        maxWidth: 420,
        width: '100%',
        padding: '48px 40px 40px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
        marginLeft: 64,
        marginTop: 80,
        zIndex: 1,
      }}>
        <h1 style={{fontSize: '2.2rem', fontWeight: 700, margin: 0, color: '#222', lineHeight: 1.15}}>
          Making product launches easy,<br />
          <span style={{color: '#43ea6d'}}>for everyone.</span>
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
