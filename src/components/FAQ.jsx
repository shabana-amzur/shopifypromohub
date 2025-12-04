
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
    <section id="faq" className="faq" style={{background: 'none', padding: '60px 0'}}>
      <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#222', textAlign: 'center', marginBottom: 20}}>FAQs</h2>
      <div className="faq-list" style={{maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
          {faqs.slice(0, 4).map((f, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 18,
              boxShadow: 'none',
              padding: 0,
                border: 'none',
              overflow: 'hidden',
              transition: 'none',
            }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  textAlign: 'left',
                  padding: '24px',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#222',
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {`${i + 1}. ${f.q}`}
                {openIndex === i ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 15l5-5 5 5" stroke="#6c6c76" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5" stroke="#6c6c76" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              {openIndex === i && (
                <div style={{padding: '0 24px 24px 24px', fontSize: '1.08rem', color: '#666', fontFamily: 'Poppins, sans-serif', background: 'none', transition: 'all 0.2s'}}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
          {faqs.slice(4, 8).map((f, i) => (
            <div key={i+4} style={{
              background: '#fff',
              borderRadius: 18,
              boxShadow: 'none',
              padding: 0,
                border: 'none',
              borderLeft: 'none',
              overflow: 'hidden',
              transition: 'none',
            }}>
              <button
                onClick={() => setOpenIndex(openIndex === i+4 ? null : i+4)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  textAlign: 'left',
                  padding: '24px',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#222',
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {`${i + 5}. ${f.q}`}
                {openIndex === i+4 ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 15l5-5 5 5" stroke="#6c6c76" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5" stroke="#6c6c76" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              {openIndex === i+4 && (
                <div style={{padding: '0 24px 24px 24px', fontSize: '1.08rem', color: '#666', fontFamily: 'Poppins, sans-serif', background: 'none', transition: 'all 0.2s'}}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
