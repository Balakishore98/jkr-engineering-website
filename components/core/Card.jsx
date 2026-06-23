import React from 'react';

/**
 * JKR Engineering — Card
 * White surface, hairline border, crisp low shadow. Optional hover lift and an
 * optional amber top accent rule (used for service / capability cards).
 */
export function Card({
  children,
  hover = false,
  accent = false,
  padding = 'var(--space-6)',
  style = {},
  className = '',
  ...rest
}) {
  const [lift, setLift] = React.useState(false);
  return (
    <div
      onMouseEnter={() => hover && setLift(true)}
      onMouseLeave={() => hover && setLift(false)}
      className={hover ? `jkr-card-pop ${className}` : className}
      style={{
        position: 'relative',
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding,
        boxShadow: lift ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: lift ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {accent && (
        <span style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: 'var(--accent)', borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
        }} />
      )}
      {children}
    </div>
  );
}
