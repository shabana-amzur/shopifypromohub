
const faqs = [
  {
    q: 'Is this app available on the Shopify App Store?',
    a: 'Currently, it’s a custom Shopify app we configure based on your business needs. We work with you to implement and maintain it as part of our custom Shopify development services.'
  },
  {
    q: 'Will this app work with my current theme and storefront design?',
    a: 'Yes. The app integrates across PDPs, PLPs, cart, and checkout, and can be customized to match your storefront’s look and feel.'
  },
  {
    q: 'Can I use this without technical knowledge?',
    a: 'Absolutely. The app includes a user-friendly admin interface designed for marketing teams to manage promotions—no developer support required.'
  },
  {
    q: 'What kind of promotions can I run?',
    a: 'You can run percentage discounts, fixed amounts, BOGO, free shipping, tiered and conditional offers—all stackable and customizable with custom Shopify development flexibility.'
  },
  {
    q: 'Will it slow down my site or conflict with other apps?',
    a: 'Not at all. It’s optimized for performance and built to reduce dependency on multiple third-party discount tools.'
  },
  {
    q: 'How long does implementation take?',
    a: 'Depending on your promotional needs, implementation typically takes 1–3 weeks. We ensure minimal disruption and full support throughout.'
  },
  {
    q: 'Can it support flash sales or scheduled promotions?',
    a: 'Yes, you can schedule campaigns in advance or create reusable templates for time-bound offers like flash sales.'
  },
  {
    q: 'What if I need ongoing changes or new promotion types later?',
    a: 'The app is fully scalable and extendable.'
  }
];

import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="faq" style={{background: '#f7fff7', padding: '60px 0'}}>
      <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#222', textAlign: 'center', marginBottom: 20}}>FAQs</h2>
      <div className="faq-list" style={{maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18}}>
        {faqs.map((f, i) => (
          <div key={i} style={{background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(67,234,109,0.08)', padding: 0, borderLeft: '6px solid #43ea6d', overflow: 'hidden'}}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                outline: 'none',
                textAlign: 'left',
                padding: '24px',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#222',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {f.q}
              <span style={{fontSize: 22, color: '#43ea6d'}}>{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && (
              <div style={{padding: '0 24px 24px 24px', fontSize: '1rem', color: '#444', fontFamily: 'Poppins, sans-serif'}}>{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
