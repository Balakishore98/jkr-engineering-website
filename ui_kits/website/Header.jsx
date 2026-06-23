/* JKR Engineering website — Header / top nav */
const { Button: JKRButton } = window.JKREngineeringDesignSystem_a889f1;

function Header({ onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'services', label: 'What we do' },
    { id: 'why', label: 'Why JKR' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  const link = (l) => (
    <a
      key={l.id}
      href={'#' + l.id}
      className="jkr-underline"
      onClick={(e) => { e.preventDefault(); onNav && onNav(l.id); }}
      style={{
        fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500,
        color: 'var(--text-body)', textDecoration: 'none', padding: '6px 2px',
        transition: 'color var(--dur) var(--ease-out)',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-strong)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-body)'; }}
    >
      {l.label}
    </a>
  );
  return (
    <header className={'jkr-header' + (scrolled ? ' is-scrolled' : '')} style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: scrolled ? '8px 32px' : '12px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNav && onNav('top'); }} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="../../assets/jkr-logo.png" alt="JKR Engineering" height={scrolled ? 56 : 68} style={{ display: 'block', transition: 'height 240ms var(--ease-out)' }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--text-muted)', lineHeight: 1.3, maxWidth: '11ch',
            textDecoration: 'none',
          }}>
            CNC Machining<br />Est. 2005
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div style={{ display: 'flex', gap: 26 }}>{links.map(link)}</div>
          <JKRButton className="jkr-shine-btn" variant="primary" size="sm" onClick={() => onNav && onNav('contact')}>Request a quote</JKRButton>
        </nav>
      </div>
    </header>
  );
}
window.Header = Header;
