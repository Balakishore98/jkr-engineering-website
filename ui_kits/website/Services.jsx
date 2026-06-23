/* JKR Engineering website — What we do (services) */
const { Card: SvcCard, SectionLabel: SvcLabel } = window.JKREngineeringDesignSystem_a889f1;

const SERVICES = [
  { no: '01', title: 'CNC Machine Tools', body: 'Design and manufacture of CNC machine tools built for repeatable, high-precision production.' },
  { no: '02', title: 'Precision Parts', body: 'Turned and milled components to tight tolerances, in the materials and finishes your job calls for.' },
  { no: '03', title: 'Made-to-Order', body: 'Custom parts produced to your drawings and specification — from one-off prototypes to production runs.' },
  { no: '04', title: 'Quality & Delivery', body: 'Every part checked against its drawing before dispatch, and shipped to your schedule.' },
];

function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg-base)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' }}>
        <div data-reveal="fade">
          <SvcLabel>What we do</SvcLabel>
          <h2 style={{
            margin: '14px 0 0', maxWidth: '20ch', fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'var(--fs-h2)', lineHeight: 1.1, letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)',
          }}>
            Manufacturing capabilities, end to end.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginTop: 40 }}>
          {SERVICES.map((s, i) => (
            <div key={s.no} data-reveal="scale" data-reveal-delay={i * 90}>
              <SvcCard accent hover padding="var(--space-6)">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--text-strong)' }}>{s.title}</h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)', letterSpacing: '0.1em' }}>{s.no}</span>
                </div>
                <p style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)' }}>{s.body}</p>
              </SvcCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;
