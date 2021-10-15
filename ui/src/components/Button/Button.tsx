import React from 'react';

import style from './Button.module.scss';

interface IButton {
  readonly disabled?: boolean;
  readonly id?: string;
  readonly label: string;
  readonly name?: string;
  readonly type?: 'button' | 'reset' | 'submit';
  readonly variant?: 'default' | 'primary';
}

const buttonTypeEnum = ['button', 'reset', 'submit'];

const Button: React.FC<IButton> = ({
  disabled = false,
  id,
  label,
  name: btnName,
  type = 'button',
  variant = 'default',
}) => (
  <button
    className={`${style.button} ${style[variant]}`}
    disabled={disabled}
    id={id}
    name={btnName}
    type={buttonTypeEnum.includes(type) ? type : 'button'} // eslint-disable-line react/button-has-type -- allowed types enumerated
  >
    {label}
  </button>
);

Button.displayName = 'Button';

export type { IButton };

export default Button;
