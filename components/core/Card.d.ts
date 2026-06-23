import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lift + deepen shadow on hover. @default false */
  hover?: boolean;
  /** Show an amber accent rule along the top edge. @default false */
  accent?: boolean;
  /** CSS padding value. @default "var(--space-6)" */
  padding?: string;
  children?: React.ReactNode;
}

/**
 * Surface container with hairline border and crisp shadow.
 * @startingPoint section="Core" subtitle="Surface container, optional hover lift" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
