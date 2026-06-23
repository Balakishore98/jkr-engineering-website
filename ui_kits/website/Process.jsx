/* JKR Engineering website — Process (drawing to delivery) */
const { SectionLabel: ProcLabel } = window.JKREngineeringDesignSystem_a889f1;

const STEPS = [
  { no: '01', title: 'Enquiry & drawing review', body: 'Send your drawing, material and quantity. We confirm feasibility and tolerances before quoting.' },
  { no: '02', title: 'Programming & tooling', body: 'CNC programs are written and tooling is set for the job before a single part is cut.' },
  { no: '03', title: 'Machining', body: 'Turning, milling, drilling and boring carried out to the spec on your drawing.' },
  { no: '04', title: 'Inspection', body: 'Every part is checked against its drawing and tolerances before it leaves the floor.' },
  { no: '05', title: 'Packing & dispatch', body: 'Parts packed and shipped to the delivery date agreed at enquiry.' },
];

function Process() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: 'var(--section-y) 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' }}>
        <div data-reveal="fade">
          <ProcLabel>How it works</ProcLabel>
          <h2 style={{
            margin: '14px 0 0', maxWidth: '24ch', fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'var(--fs-h2)', lineHeight: 1.1, letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)',
          }}>
            From your drawing to your dock.
          </h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, marginTop: 44,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 22, left: '10%', right: '10%', height: 1,
            background: 'var(--border-strong)', zIndex: 0,
          }} />
          {STEPS.map((s, i) => (
            <div
              key={s.no}
              className="jkr-step"
              data-reveal="up-big"
              data-reveal-delay={i * 110}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <span className="jkr-step-num" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--steel-900)',
                color: 'var(--text-on-dark)', fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 600,
              }}>
                {s.no}
              </span>
              <h3 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text-strong)' }}>
                {s.title}
              </h3>
              <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.55, color: 'var(--text-muted)' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Process = Process;
