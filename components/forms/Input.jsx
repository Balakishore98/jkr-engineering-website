import React from 'react';

/**
 * JKR Engineering — Input
 * Labeled text field. Low radius, steel border, amber focus ring.
 */
export function Input({
  label,
  hint,
  id,
  type = 'text',
  error = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--red-500)' : (focus ? 'var(--accent)' : 'var(--border-strong)');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-label)',
          letterSpacing: 'var(--ls-label)',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--fs-body)',
          color: 'var(--text-strong)',
          background: 'var(--surface-card)',
          padding: '12px 14px',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
          transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
          ...style,
        }}
        {...rest}
      />
      {hint && (
        <span style={{ fontSize: 'var(--fs-xs)', color: error ? 'var(--red-500)' : 'var(--text-faint)' }}>
          {hint}
        </span>
      )}
    </div>
  );
}
