
function JoinNow() {
  return (
    <section className="join-now" style={{background: 'linear-gradient(135deg, #8f6fff 0%, #6f4aff 100%)', padding: '60px 0', textAlign: 'center'}}>
      <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: 24}}>Ready to join us?</h2>
      <button
        style={{
          background: '#fff',
          color: '#8f6fff',
          border: 'none',
          borderRadius: 8,
          padding: '16px 48px',
          fontWeight: 700,
          fontSize: '1.15rem',
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(67,234,109,0.08)',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Join Now
      </button>
    </section>
  );
}

export default JoinNow;
