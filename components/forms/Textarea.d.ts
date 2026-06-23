import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  /** @default 4 */
  rows?: number;
}

/** Multi-line text field matching Input, for enquiry / part-spec messages. */
export function Textarea(props: TextareaProps): JSX.Element;
