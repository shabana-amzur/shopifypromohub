
import logo from '../assets/logo.png';

function Banner() {
  return (
    <section className="banner" style={{background: 'linear-gradient(90deg, #ff9800 0%, #43ea6d 100%)', padding: '60px 0 40px 0'}}>
      <div className="banner-content" style={{maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48}}>
        <div style={{flex: 1}}>
          <img src={logo} alt="Logo" style={{height: 48, marginBottom: 24}} />
          <h1 style={{fontSize: '2.8rem', fontWeight: 700, margin: 0, color: '#222'}}>Making product launches easy, <span style={{color: '#43ea6d'}}>for everyone.</span></h1>
          <p style={{fontSize: '1.25rem', margin: '18px 0 32px 0', color: '#222'}}>Join the waitlist to get early access and exclusive updates when we launch on Shopify Marketplace.</p>
          <form style={{display: 'flex', gap: 12, maxWidth: 400}}>
            <input type="email" placeholder="you@yourmail.com" style={{flex: 1, padding: '12px 16px', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem'}} />
            <button type="submit" style={{background: '#ff9800', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 24px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'}}>Join Now</button>
          </form>
        </div>
        <div style={{flex: 1, textAlign: 'center'}}>
          {/* Placeholder for product image or demo video preview */}
          <div style={{width: '100%', height: 260, background: 'rgba(255,255,255,0.7)', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: '1.2rem'}}>Demo Video / Product Preview</div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
