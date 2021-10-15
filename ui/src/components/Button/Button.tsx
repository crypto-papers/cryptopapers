import React from 'react';

import style from './Button.module.scss';

interface IButtonProps extends Partial<HTMLButtonElement> {
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

/**
 * A JSX component that provides a styled button element.
 * @component
 * @param props
 * @param props.disabled - Whether or not the user should be able to interact with the button.
 * @param props.id - A unique identifier that can be used to reference the element.
 * @param props.label - The button text that describes the button to the user.
 * @param props.name - A name used to identify the element.
 * @param props.onClick - A function to be called (with the click event) when the button is clicked.
 * @param props.outline - Whether to use the outline or solid button style. Defaults to solid.
 * @param props.variant - Which color scheme to use when styling the button. Defaults to grey.
 */
const Button: React.FC<IButtonProps> = ({
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

export type { IButtonProps };

export default Button;
