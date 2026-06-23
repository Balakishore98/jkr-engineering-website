/* JKR Engineering website — Capabilities gallery (decorative).
   Purely visual proof-of-craft strip; does not redefine the service list in Services.jsx. */
const { SectionLabel: GalleryLabel } = window.JKREngineeringDesignSystem_a889f1;

const GALLERY = [
  { src: '../../assets/tools-milling-cutters.png', alt: 'Milling cutters produced on JKR Engineering CNC equipment' },
  { src: '../../assets/tools-boring-bars.png', alt: 'Boring bars produced on JKR Engineering CNC equipment' },
  { src: '../../assets/tools-tool-holders.png', alt: 'Tool holders produced on JKR Engineering CNC equipment' },
];

function Capabilities() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: '0 0 var(--section-y)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 32px' }}>
        <div data-reveal="fade" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <GalleryLabel>From the workshop floor</GalleryLabel>
            <h2 style={{
              margin: '14px 0 0', maxWidth: '26ch', fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'var(--fs-h2)', lineHeight: 1.1, letterSpacing: 'var(--ls-tight)', color: 'var(--text-strong)',
            }}>
              Precision, up close.
            </h2>
          </div>
          <p style={{ margin: 0, maxWidth: '36ch', fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)' }}>
            A look at the standard of finish and consistency every part leaves our floor with.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 36 }}>
          {GALLERY.map((g, i) => (
            <div
              key={g.src}
              data-reveal="scale"
              data-reveal-delay={i * 100}
              className="jkr-img-zoom"
              style={{
                borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <img src={g.src} alt={g.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 'var(--radius-lg)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Capabilities = Capabilities;
