/* JKR Engineering website — Hero */
const { Button: HeroButton, SectionLabel: HeroLabel, Badge: HeroBadge } = window.JKREngineeringDesignSystem_a889f1;

function Hero({ onNav }) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    let destroy = null;
    window.JKRHero3D && window.JKRHero3D.whenReady(() => {
      destroy = window.JKRHero3D.init(canvasRef.current);
    });
    return () => { destroy && destroy(); };
  }, []);

  return (
    <section id="top" style={{ background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden', minHeight: 'clamp(560px, 92vh, 880px)', display: 'flex', alignItems: 'center' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
      {/* dark gradient so the left-aligned text stays legible over the 3D scene */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(100deg, rgba(10,14,20,0.92) 0%, rgba(10,14,20,0.72) 38%, rgba(10,14,20,0.25) 68%, rgba(10,14,20,0.05) 100%)',
      }} />
      <div style={{
        position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', width: '100%',
        padding: 'clamp(56px, 8vw, 104px) 32px',
      }}>
        <div data-reveal="left" style={{ maxWidth: 640 }}>
          <HeroLabel tone="dark">CNC Manufacturing · Est. 2005</HeroLabel>
          <h1 style={{
            margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'var(--fs-display)', lineHeight: 1.04, letterSpacing: 'var(--ls-tight)',
            color: 'var(--text-on-dark)',
          }}>
            {['Machine', 'tools', '&', 'parts,'].map((w, i) => (
              <span key={w} className="jkr-word" style={{ animationDelay: `${i * 90}ms` }}>{w}&nbsp;</span>
            ))}
            <br />
            {['made', 'to', 'exact', 'spec.'].map((w, i) => (
              <span key={w} className="jkr-word" style={{ color: 'var(--accent-on-dark)', animationDelay: `${360 + i * 90}ms` }}>{w}&nbsp;</span>
            ))}
          </h1>
          <p style={{
            margin: '22px 0 0', maxWidth: '46ch', fontSize: 18, lineHeight: 1.65,
            color: 'var(--text-on-dark-muted)',
          }}>
            JKR Engineering manufactures CNC machine tools and precision components
            to your drawings — built for quality, delivered on time, since 2005.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <HeroButton className="jkr-shine-btn" variant="primary" size="lg" onClick={() => onNav && onNav('contact')}>Request a quote</HeroButton>
            <HeroButton variant="dark" size="lg" onClick={() => onNav && onNav('services')} iconRight={<span>→</span>}>What we do</HeroButton>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
            <HeroBadge variant="dark">±0.01 mm tolerance</HeroBadge>
            <HeroBadge variant="dark">Made to order</HeroBadge>
            <HeroBadge variant="dark">On-time delivery</HeroBadge>
            <HeroBadge variant="accent">Est. May 2005</HeroBadge>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
