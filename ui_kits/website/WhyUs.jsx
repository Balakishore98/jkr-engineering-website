/* JKR Engineering website — Why JKR (about + proof bar) */
const { SectionLabel: WhyLabel, StatBlock: WhyStat, Badge: WhyBadge } = window.JKREngineeringDesignSystem_a889f1;

const POINTS = [
  'Built to your drawings and tolerances',
  'Checked against spec before dispatch',
  'On-time delivery you can plan around',
  'One workshop, accountable end to end',
];

/* Matches StatBlock's visuals but keeps the value in its own leaf <span data-count>
   so motion.js can count it up without clobbering the label markup. */
function CountStat({ value, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span data-count style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 'var(--fw-bold)',
        lineHeight: 1, letterSpacing: 'var(--ls-tight)', color: 'var(--text-on-dark)',
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase', color: 'var(--text-on-dark-muted)',
      }}>{label}</span>
    </div>
  );
}

function WhyUs() {
  return (
    <section id="why" style={{ background: 'var(--bg-dark)', padding: 'var(--section-y) 0', position: 'relative' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div data-reveal="left">
            <WhyLabel tone="dark">Why JKR</WhyLabel>
            <h2 style={{
              margin: '14px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'var(--fs-h2)', lineHeight: 1.1, letterSpacing: 'var(--ls-tight)', color: 'var(--text-on-dark)',
            }}>
              Quality parts, delivered when we say.
            </h2>
            <p style={{ margin: '20px 0 0', fontSize: 17, lineHeight: 1.65, color: 'var(--text-on-dark-muted)', maxWidth: '46ch' }}>
              Since 2005 we have manufactured CNC machine tools and precision
              components for clients who need the part right and the date kept.
            </p>
            <ul style={{ listStyle: 'none', margin: '24px 0 0', padding: 0, display: 'grid', gap: 12 }}>
              {POINTS.map((p, i) => (
                <li key={p} data-reveal="left" data-reveal-delay={i * 80 + 80} style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--text-on-dark)', fontSize: 15 }}>
                  <span style={{ color: 'var(--accent-on-dark)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal="right" style={{
            background: 'var(--surface-dark)', border: '1px solid var(--border-dark)',
            borderRadius: 'var(--radius-lg)', padding: 36,
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
          }}>
            <CountStat value="20+" label="Years in operation" />
            <WhyStat tone="dark" value="On-time" label="Delivery promise" />
            <CountStat value="±0.01" label="mm tolerance" />
            <WhyStat tone="dark" value="1:1" label="Made to your spec" />
            <div style={{ gridColumn: '1 / -1', borderTop: '1px solid var(--border-dark)', paddingTop: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <WhyBadge variant="accent">Est. May 2005</WhyBadge>
              <WhyBadge variant="dark">CNC machine tools</WhyBadge>
              <WhyBadge variant="dark">Precision parts</WhyBadge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.WhyUs = WhyUs;
