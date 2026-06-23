import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  variant?: 'neutral' | 'accent' | 'success' | 'danger' | 'dark';
  children?: React.ReactNode;
}

/** Compact mono status/label chip with square corners. */
export function Badge(props: BadgeProps): JSX.Element;
