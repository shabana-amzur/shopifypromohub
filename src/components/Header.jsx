import React from 'react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
];

function Header() {
  return (
    <header style={{
      width: '100%',
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: 'none',
      margin: 0,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      fontFamily: 'Poppins, Inter, sans-serif',
    }}>
      <div style={{
        maxWidth: 1280,
        width: '100%',
        height: 104,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 56px',
        margin: '0 auto',
      }}>
        <img src="/logo.png" alt="Logo" style={{height: 45, marginRight: 32}} />
        <nav>
          <ul style={{display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0, alignItems: 'center'}}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} style={{color: '#222', fontWeight: 500, fontSize: '1.08rem', textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'background 0.2s', fontFamily: 'Poppins, Inter, sans-serif'}}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#join" style={{
                background: '#ff9800',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.08rem',
                textDecoration: 'none',
                padding: '10px 22px',
                borderRadius: 8,
                marginLeft: 12,
                fontFamily: 'Poppins, Inter, sans-serif',
                transition: 'background 0.2s',
                display: 'inline-block',
              }}>Join now</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
