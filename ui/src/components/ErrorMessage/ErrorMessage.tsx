import React from 'react';

import style from './ErrorMessage.module.scss';

/**
 * Information on the nature of the error encountered.
 * @typedef ErrorMessageProps
 * @type {Object}
 * @property {Object} error - A standard error object.
 * @property {string} error.message - A brief description of the error.
 * @property {string} error.name - The type of error.
 * @property {string=} customMessage - An optional custom message added as a header.
 */
interface IErrorMessageProps {
  customMessage?: string;
  error: {
    message: string;
    name: string;
  };
}

/**
 * A JSX component that renders an error message.
 * @component
 * @param props
 * @param props.customMessage - An optional custom message added at the top of the component.
 * @param props.error - A standard error object.
 */
const ErrorMessage: React.VFC<IErrorMessageProps> = ({ customMessage = '', error }) => (
  <div className={style.container}>
    {customMessage && <strong className={style.title}>{customMessage}</strong>}
    <div>
      <strong>{`${error.name}: ` || 'Error: '}</strong>
      {error.message}
    </div>
  </div>
);

ErrorMessage.displayName = 'Error Message';

export type { IErrorMessageProps };

export default ErrorMessage;
