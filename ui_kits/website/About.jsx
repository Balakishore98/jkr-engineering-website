/* JKR Engineering website — About (company + proprietor) */
const { SectionLabel: AboutLabel } = window.JKREngineeringDesignSystem_a889f1;

function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-base)', padding: 'var(--section-y) 0' }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px',
        display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center',
      }}>
        <div data-reveal="left">
          <AboutLabel>About JKR</AboutLabel>
          <h2 style={{
            margin: '14px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'var(--fs-h2)', lineHeight: 1.1, letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)',
          }}>
            A workshop built on precision and trust.
          </h2>
          <p style={{ margin: '22px 0 0', fontSize: 18, lineHeight: 1.7, color: 'var(--text-body)' }}>
            JKR Engineering was established in May 2005. We manufacture CNC machine
            tools and precision parts, and we take on made-to-order work built to each
            client&rsquo;s drawings and specification. Our focus has never changed:
            deliver the part in the quality the job demands, and deliver it on time.
          </p>
          <div style={{
            marginTop: 32, display: 'flex', alignItems: 'center', gap: 16,
            padding: '18px 22px', background: 'var(--surface-card)',
            border: '1px solid var(--border)', borderLeft: '3px solid var(--accent)',
            borderRadius: 'var(--radius-md)',
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: 'var(--radius-sm)', background: 'var(--steel-900)',
              color: 'var(--text-on-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18,
            }}>C</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text-strong)' }}>Chidambararajan</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Proprietor · JKR Engineering</div>
            </div>
          </div>
        </div>
        <div data-reveal="right" data-reveal-delay="120" className="jkr-img-zoom" style={{
          borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)',
        }}>
          <img src="../../assets/tools-category-grid.png" alt="Tooling categories manufactured by JKR Engineering"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-lg)' }} />
        </div>
      </div>
    </section>
  );
}
window.About = About;
