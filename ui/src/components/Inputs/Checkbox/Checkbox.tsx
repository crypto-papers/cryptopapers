import React from 'react';

import Input from '../Input/Input';

interface ICheckboxProps extends Partial<HTMLInputElement> {
  readonly id: string;
  readonly label: string;
  readonly name: string;
}

/**
 * A JSX component that renders a styled checkbox input field.
 * @component
 * @param props
 * @param props.id - A unique identifier that can be used to reference the element.
 * @param props.label - The text used to describe the purpose of the input field.
 * @param props.name - A name used to identify the element.
 * @param props.required - Whether or not the the input is a required field.
 */
const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  label,
  name: fieldName,
  required = false,
  type,
  ...rest
}) => (
  <Input id={id} label={label} name={fieldName} required={required} type="checkbox" {...rest} />
);

Checkbox.displayName = 'Checkbox';

export type { ICheckboxProps };

export default Checkbox;
