import React from 'react';

import style from './Button.module.scss';

interface IButton {
  readonly disabled?: boolean;
  readonly id?: string;
  readonly label: string;
  readonly name?: string;
  readonly onClick: (e: React.MouseEvent) => void;
  readonly outline?: boolean;
  readonly type?: 'button' | 'reset' | 'submit';
  readonly variant?: 'danger' | 'default' | 'primary' | 'secondary';
}

const buttonTypeEnum = ['button', 'reset', 'submit'];

const Button: React.FC<IButton> = ({
  disabled = false,
  id,
  label,
  name: btnName,
  onClick,
  outline = false,
  type = 'button',
  variant = 'default',
}) => {
  const baseStyle = `${style.button} ${style[variant]}`;

  return (
    <button
      className={outline ? `${baseStyle} ${style.outline}` : baseStyle}
      disabled={disabled}
      id={id}
      name={btnName}
      type={buttonTypeEnum.includes(type) ? type : 'button'} // eslint-disable-line react/button-has-type -- allowed types enumerated above
      onClick={(e: React.MouseEvent): void => onClick(e)}
    >
      {label}
    </button>
  );
};

Button.displayName = 'Button';

export type { IButton };

export default Button;
