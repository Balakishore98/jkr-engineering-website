/* JKR Engineering website — Hero */
const { Button: HeroButton, SectionLabel: HeroLabel, Badge: HeroBadge } = window.JKREngineeringDesignSystem_a889f1;

function Hero({ onNav }) {
  const imgWrapRef = React.useRef(null);

  const onTilt = (e) => {
    const el = imgWrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${px * 18}deg) rotateX(${py * -18}deg) scale(1.03)`;
  };
  const onTiltLeave = () => {
    if (imgWrapRef.current) imgWrapRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <section id="top" style={{ background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
      {/* faint blueprint grid, slow ambient drift */}
      <div className="jkr-grid-drift" style={{
        position: 'absolute', inset: 0, opacity: 0.5,
        backgroundImage: 'linear-gradient(var(--steel-800) 1px, transparent 1px), linear-gradient(90deg, var(--steel-800) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(120% 90% at 70% 10%, #000 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(120% 90% at 70% 10%, #000 30%, transparent 80%)',
      }} />
      {/* ambient amber glow behind the image */}
      <div className="jkr-glow" style={{
        position: 'absolute', top: '4%', right: '0%', width: 560, height: 560,
        background: 'radial-gradient(circle, rgba(127,6,6,0.32), transparent 70%)',
        filter: 'blur(14px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'relative', maxWidth: 'var(--container)', margin: '0 auto',
        padding: 'clamp(56px, 8vw, 104px) 32px', display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center',
      }}>
        <div data-reveal="left">
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
          <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
            <HeroBadge variant="dark">±0.01 mm tolerance</HeroBadge>
            <HeroBadge variant="dark">Made to order</HeroBadge>
            <HeroBadge variant="dark">On-time delivery</HeroBadge>
          </div>
        </div>
        <div data-reveal="right" data-reveal-delay="120" style={{ position: 'relative', perspective: 1000 }}>
          <div
            ref={imgWrapRef}
            className="jkr-tilt jkr-img-zoom"
            onMouseMove={onTilt}
            onMouseLeave={onTiltLeave}
            style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-dark)', boxShadow: 'var(--shadow-lg)' }}
          >
            <img src="../../assets/tools-collage-overview.png" alt="Precision cutting tools manufactured by JKR Engineering"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-lg)' }} />
          </div>
          <div className="jkr-float" style={{
            position: 'absolute', bottom: -14, left: -14, background: 'var(--accent)',
            color: 'var(--accent-contrast)', padding: '10px 16px', borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', fontWeight: 600,
            boxShadow: 'var(--shadow-accent)',
          }}>
            EST. MAY 2005
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
