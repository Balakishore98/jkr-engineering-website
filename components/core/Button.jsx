import React from 'react';

/**
 * JKR Engineering — Button
 * Industrial, low-radius button. Amber primary, steel secondary, ghost, and a
 * dark variant for use on dark sections.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 14, gap: 7 },
    md: { padding: '12px 20px', fontSize: 15, gap: 9 },
    lg: { padding: '15px 28px', fontSize: 16, gap: 10 },
  };

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid var(--accent)',
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent',
    },
    dark: {
      background: 'var(--steel-800)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--steel-700)',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    padding: sizes[size].padding,
    fontFamily: 'var(--font-sans)',
    fontSize: sizes[size].fontSize,
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
    ...variants[variant],
    ...style,
  };

  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.98)'; };
  const onUp = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-3px) scale(1.015)'; };
  const onEnter = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-3px) scale(1.015)'; };
  const onLeave = (e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; };

  return (
    <button
      type="button"
      disabled={disabled}
      style={base}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
