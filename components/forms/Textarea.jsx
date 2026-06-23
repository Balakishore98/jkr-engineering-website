import React from 'react';

/**
 * JKR Engineering — Textarea
 * Multi-line field matching Input's styling. For enquiry / part-spec messages.
 */
export function Textarea({ label, hint, id, rows = 4, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
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
      <textarea
        id={inputId}
        rows={rows}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--fs-body)',
          color: 'var(--text-strong)',
          background: 'var(--surface-card)',
          padding: '12px 14px',
          border: `1px solid ${focus ? 'var(--accent)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          resize: 'vertical',
          boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
          transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
          ...style,
        }}
        {...rest}
      />
      {hint && <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>{hint}</span>}
    </div>
  );
}
