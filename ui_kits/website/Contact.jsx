/* JKR Engineering website — Contact (details + enquiry form) */
const { Button: CtaButton, Input: CtaInput, Textarea: CtaTextarea, SectionLabel: CtaLabel } = window.JKREngineeringDesignSystem_a889f1;

function Contact() {
  const [sent, setSent] = React.useState(false);

  const detail = (label, value, href) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-on-dark-faint)' }}>{label}</span>
      {href
        ? <a href={href} style={{ fontSize: 18, color: 'var(--text-on-dark)', textDecoration: 'none', fontWeight: 500 }}>{value}</a>
        : <span style={{ fontSize: 18, color: 'var(--text-on-dark)', fontWeight: 500 }}>{value}</span>}
    </div>
  );

  return (
    <section id="contact" style={{ background: 'var(--bg-dark-2)', padding: 'var(--section-y) 0' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px',
        display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'start' }}>
        <div data-reveal="left">
          <CtaLabel tone="dark">Get in touch</CtaLabel>
          <h2 style={{
            margin: '14px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'var(--fs-h2)', lineHeight: 1.1, letterSpacing: 'var(--ls-tight)', color: 'var(--text-on-dark)',
          }}>
            Send us your drawing.
          </h2>
          <p style={{ margin: '18px 0 0', fontSize: 17, lineHeight: 1.65, color: 'var(--text-on-dark-muted)', maxWidth: '42ch' }}>
            Tell us the part, material and quantity. We&rsquo;ll come back with a
            quote and a realistic delivery date.
          </p>
          <div style={{ display: 'grid', gap: 22, marginTop: 36 }}>
            {detail('Proprietor', 'Chidambararajan')}
            {detail('Phone', '90923 54314', 'tel:9092354314')}
            {detail('Established', 'May 2005')}
          </div>
        </div>

        <div data-reveal="right" data-reveal-delay="100" style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow-lg)' }}>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 320, gap: 12 }}>
              <div className="jkr-pop-in" style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--amber-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>✓</div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--text-strong)' }}>Enquiry received</h3>
              <p style={{ margin: 0, color: 'var(--text-body)', maxWidth: '34ch' }}>Thank you. We&rsquo;ll reply within one business day. For anything urgent, call 90923&nbsp;54314.</p>
              <CtaButton variant="secondary" onClick={() => setSent(false)}>Send another</CtaButton>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <CtaInput label="Name" placeholder="Your name" required />
                <CtaInput label="Phone" type="tel" placeholder="90923 54314" required />
              </div>
              <CtaInput label="Company" placeholder="Company name" />
              <CtaTextarea label="What do you need made?" rows={4} placeholder="Part, material, quantity, tolerances…" required />
              <CtaButton className="jkr-shine-btn" variant="primary" size="lg" fullWidth onClick={(e) => { e.preventDefault(); setSent(true); }}>Send enquiry</CtaButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
