/* JKR Engineering website — Materials & capability snapshot */
const { SectionLabel: MatLabel, Badge: MatBadge } = window.JKREngineeringDesignSystem_a889f1;

const MATERIALS = ['Mild steel', 'Stainless steel', 'Aluminium', 'Brass', 'Cast iron', 'Engineering plastics'];

const CAPABILITIES = [
  'Turning & milling, single setup or multi-axis',
  'Drilling, boring & tapping to drawing tolerance',
  'Grinding & surface finishing',
  'Batch runs — prototype quantities to production volumes',
];

function Materials() {
  return (
    <section style={{ background: 'var(--bg-dark-2)', padding: 'var(--section-y) 0' }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
      }}>
        <div data-reveal="left">
          <MatLabel tone="dark">Materials</MatLabel>
          <h2 style={{
            margin: '14px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'var(--fs-h2)', lineHeight: 1.1, letterSpacing: 'var(--ls-tight)', color: 'var(--text-on-dark)',
          }}>
            Worked in the materials your job calls for.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
            {MATERIALS.map((m, i) => (
              <span key={m} data-reveal="scale" data-reveal-delay={i * 70}>
                <MatBadge variant="dark">{m}</MatBadge>
              </span>
            ))}
          </div>
        </div>
        <div data-reveal="right" data-reveal-delay="120">
          <MatLabel tone="dark">Capability snapshot</MatLabel>
          <h2 style={{
            margin: '14px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'var(--fs-h2)', lineHeight: 1.1, letterSpacing: 'var(--ls-tight)', color: 'var(--text-on-dark)',
          }}>
            What the floor is set up to run.
          </h2>
          <ul style={{ listStyle: 'none', margin: '24px 0 0', padding: 0, display: 'grid', gap: 12 }}>
            {CAPABILITIES.map((c, i) => (
              <li key={c} data-reveal="right" data-reveal-delay={i * 80 + 160} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: 'var(--text-on-dark)', fontSize: 15 }}>
                <span style={{ color: 'var(--accent-on-dark)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>▸</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
window.Materials = Materials;
