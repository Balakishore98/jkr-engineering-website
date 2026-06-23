import * as React from 'react';

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big figure, e.g. "20+" or "99.4%". */
  value?: React.ReactNode;
  /** Mono caption below the figure. */
  label?: React.ReactNode;
  /** @default "light" */
  tone?: 'light' | 'dark';
}

/** Large figure + mono label for proof bars (years, parts, on-time rate). */
export function StatBlock(props: StatBlockProps): JSX.Element;
