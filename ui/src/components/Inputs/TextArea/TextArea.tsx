import React from 'react';

import Input from '../Input/Input';

interface ITextAreaProps extends Partial<HTMLTextAreaElement> {
  readonly id: string;
  readonly label: string;
  readonly name: string;
}

/**
 * A JSX component that renders a styled textarea.
 * @component
 * @param props
 * @param props.id - A unique identifier that can be used to reference the element.
 * @param props.label - The text used to describe the purpose of the input field.
 * @param props.name - A name used to identify the element.
 * @param props.required - Whether or not the the input is a required field.
 */
const TextArea: React.FC<ITextAreaProps> = ({
  id,
  label,
  name: fieldName,
  required = false,
  type,
  ...rest
}) => (
  <Input id={id} label={label} name={fieldName} required={required} type="textarea" {...rest} />
);

TextArea.displayName = 'Text Area';

export type { ITextAreaProps };

export default TextArea;
