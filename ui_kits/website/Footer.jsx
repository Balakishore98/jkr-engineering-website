/* JKR Engineering website — Footer */
function Footer({ onNav }) {
  const links = [
    { id: 'services', label: 'What we do' },
    { id: 'why', label: 'Why JKR' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark)' }}>
      <div data-reveal="fade" style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '40px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap',
      }}>
        <div style={{ maxWidth: 320 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', background: 'var(--steel-50)',
            borderRadius: 'var(--radius-sm)', padding: '8px 12px',
          }}>
            <img src="../../assets/jkr-logo.png" alt="JKR Engineering" height="56" style={{ display: 'block' }} />
          </div>
          <p style={{ margin: '16px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--text-on-dark-faint)' }}>
            CNC machine tools and precision parts, manufactured to spec since 2005.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-dark-faint)' }}>Site</span>
            {links.map((l) => (
              <a key={l.id} href={'#' + l.id} className="jkr-underline" onClick={(e) => { e.preventDefault(); onNav && onNav(l.id); }}
                style={{ fontSize: 14, color: 'var(--text-on-dark-muted)', textDecoration: 'none', width: 'fit-content' }}>{l.label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-dark-faint)' }}>Contact</span>
            <span style={{ fontSize: 14, color: 'var(--text-on-dark-muted)' }}>Chidambararajan</span>
            <a href="tel:9092354314" style={{ fontSize: 14, color: 'var(--accent-on-dark)', textDecoration: 'none' }}>90923 54314</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-dark)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-on-dark-faint)' }}>© 2005–2026 JKR Engineering</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-on-dark-faint)', letterSpacing: '0.08em' }}>EST. MAY 2005</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
