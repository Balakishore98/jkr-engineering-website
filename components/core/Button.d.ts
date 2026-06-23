import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Element rendered before the label (e.g. an icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Primary action control for JKR Engineering surfaces.
 * @startingPoint section="Core" subtitle="Amber primary + steel variants" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
