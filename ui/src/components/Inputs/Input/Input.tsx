import React from 'react';

import style from './Input.module.scss';

interface IInputProps {
  readonly id: string;
  readonly label: string;
  readonly name: string;
  readonly required: boolean;
  readonly type: string;
}

/**
 * A JSX component that forms the base for all user inputs.
 * @component
 * @param props
 * @param props.id - A unique identifier that can be used to reference the element.
 * @param props.label - The text used to describe the purpose of the input field.
 * @param props.name - A name used to identify the element.
 * @param props.required - Whether or not the the input is a required field.
 * @param props.type - The input type to render.
 */
const Input: React.FC<IInputProps> = ({
  id,
  label,
  name: fieldName,
  required = false,
  type,
  ...rest
}) => (
  <div className={type === 'checkbox' ? `${style.field} ${style.reversed}` : style.field}>
    <label className={required ? `${style.label} ${style.required}` : style.label} htmlFor={id}>
      {label}
    </label>
    {type === 'textarea' && <textarea id={id} name={fieldName} required={required} {...rest} />}
    {type !== 'textarea' && (
      <input id={id} name={fieldName} required={required} type={type} {...rest} />
    )}
  </div>
);

Input.displayName = 'Input';

export type { IInputProps };

export default Input;
