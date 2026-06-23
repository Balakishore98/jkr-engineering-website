import React from 'react';

/**
 * JKR Engineering — SectionLabel
 * Mono, uppercase, letter-spaced eyebrow with an amber tick. Used above
 * section headings throughout the site for a precise, technical feel.
 */
export function SectionLabel({ children, tone = 'light', style = {}, ...rest }) {
  const color = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const tickColor = tone === 'dark' ? 'var(--accent-on-dark)' : 'var(--accent)';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-label)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
      {...rest}
    >
      <span style={{ width: 24, height: 2, background: tickColor, display: 'inline-block' }} />
      {children}
    </span>
  );
}
