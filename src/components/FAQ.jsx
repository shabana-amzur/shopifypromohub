
const faqs = [
  {
    q: 'When will the product launch?',
    a: 'We’re launching soon on Shopify Marketplace. Join the waitlist to be the first to know!'
  },
  {
    q: 'How do I join the waitlist?',
    a: 'Simply enter your email above and click “Join Now.” We’ll notify you when we go live.'
  },
  {
    q: 'Is my email safe?',
    a: 'Absolutely. We use secure systems to protect your data and never share your information.'
  },
  {
    q: 'Can I invite others?',
    a: 'Yes! Share the site with friends and colleagues who may be interested.'
  }
];

function FAQ() {
  return (
    <section className="faq" style={{background: '#f7fff7', padding: '60px 0'}}>
      <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#ff9800', textAlign: 'center', marginBottom: 40}}>FAQ</h2>
      <div className="faq-list" style={{maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28}}>
        {faqs.map((f, i) => (
          <div key={i} style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(67,234,109,0.08)', padding: 24, borderLeft: '6px solid #43ea6d'}}>
            <h3 style={{fontSize: '1.1rem', fontWeight: 600, marginBottom: 10, color: '#222'}}>{f.q}</h3>
            <p style={{fontSize: '1rem', color: '#444', margin: 0}}>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
