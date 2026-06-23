import React from 'react';

/**
 * JKR Engineering — StatBlock
 * A large figure with a mono label. Used in proof bars (years in business,
 * parts shipped, on-time rate). Works on light or dark backgrounds.
 */
export function StatBlock({ value, label, tone = 'light', style = {}, ...rest }) {
  const valueColor = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-strong)';
  const labelColor = tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-h1)',
        fontWeight: 'var(--fw-bold)',
        lineHeight: 1,
        letterSpacing: 'var(--ls-tight)',
        color: valueColor,
      }}>
        {value}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-label)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        color: labelColor,
      }}>
        {label}
      </span>
    </div>
  );
}
