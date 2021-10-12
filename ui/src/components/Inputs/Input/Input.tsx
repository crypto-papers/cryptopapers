import React from 'react';

import style from './Input.module.scss';

interface IInput {
  readonly fieldName: string;
  readonly id: string;
  readonly label: string;
  readonly required?: boolean;
  readonly type: string;
}

const Input: React.FC<IInput> = ({ fieldName, id, label, required = false, type }) => (
  <div className={type === 'checkbox' ? `${style.field} ${style.reversed}` : style.field}>
    <label className={required ? `${style.label} ${style.required}` : style.label} htmlFor={id}>
      {label}
    </label>
    {type === 'textarea' && <textarea id={id} name={fieldName} required={required} />}
    {type !== 'textarea' && <input id={id} name={fieldName} required={required} type={type} />}
  </div>
);

Input.displayName = 'Input';

export default Input;
