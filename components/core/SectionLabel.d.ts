import * as React from 'react';

export interface SectionLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Light section or dark section. @default "light" */
  tone?: 'light' | 'dark';
  children?: React.ReactNode;
}

/** Mono uppercase eyebrow with an amber tick, set above section headings. */
export function SectionLabel(props: SectionLabelProps): JSX.Element;
