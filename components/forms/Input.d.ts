import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label above the field. */
  label?: string;
  /** Helper or error text below the field. */
  hint?: string;
  /** Render in error (red) state. @default false */
  error?: boolean;
}

/** Labeled single-line text field with amber focus ring. */
export function Input(props: InputProps): JSX.Element;
