import React from 'react';

/**
 * JKR Engineering — Badge
 * Compact status/label chip. Mono text, square-ish corners.
 */
export function Badge({ children, variant = 'neutral', style = {}, ...rest }) {
  const variants = {
    neutral: { background: 'var(--steel-100)', color: 'var(--steel-700)', border: '1px solid var(--border)' },
    accent:  { background: 'var(--accent-soft)', color: 'var(--amber-700)', border: '1px solid var(--amber-200)' },
    success: { background: 'var(--green-100)', color: '#1f6e41', border: '1px solid #b8e3c9' },
    danger:  { background: 'var(--red-100)', color: '#a5322a', border: '1px solid #f3c4bf' },
    dark:    { background: 'var(--steel-800)', color: 'var(--text-on-dark-muted)', border: '1px solid var(--steel-700)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 9px',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-xs)',
        fontWeight: 'var(--fw-medium)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        lineHeight: 1,
        borderRadius: 'var(--radius-xs)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
