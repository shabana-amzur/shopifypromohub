
function JoinNow() {
  return (
    <section className="join-now" style={{background: '#fff', padding: '60px 0', textAlign: 'center'}}>
      <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#ff9800', marginBottom: 24}}>Get Early Access</h2>
      <p style={{fontSize: '1.15rem', color: '#222', marginBottom: 32}}>Sign up to join the waitlist and be the first to know when we launch.</p>
      <form style={{display: 'flex', gap: 12, maxWidth: 400, margin: '0 auto', justifyContent: 'center'}}>
        <input type="email" placeholder="you@yourmail.com" style={{flex: 1, padding: '12px 16px', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem'}} />
        <button type="submit" style={{background: '#43ea6d', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 24px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'}}>Join Now</button>
      </form>
    </section>
  );
}

export default JoinNow;
