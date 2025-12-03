
import logo from '../assets/logo.png';

function Banner() {
  return (
    <section className="banner" style={{background: 'linear-gradient(120deg, #ff9800 0%, #43ea6d 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0'}}>
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
        margin: '0 24px',
      }}>
        <img src={logo} alt="Logo" style={{height: 40, marginBottom: 12}} />
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
