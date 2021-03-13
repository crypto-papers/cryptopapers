import React from 'react';

import style from './ErrorMessage.module.scss';

/**
 * Information on the nature of the error encountered
 * @typedef ErrorMessageProps
 * @type {Object}
 * @property {Object} error - A standard error object
 * @property {string} error.message - A brief description of the error
 * @property {string} error.name - The type of error
 * @property {string=} customMessage - An optional custom message added as a header
 * @memberof ErrorMessage
 */
type ErrorMessageProps = {
  customMessage?: string,
  error: {
    message: string,
    name: string,
  },
};

/**
 * JSX component that renders an error message
 * @param {ErrorMessageProps} props
 * @namespace ErrorMessage
 */
const ErrorMessage = ({ customMessage, error }: ErrorMessageProps) => (
  <div className={style['error-container']}>
    {customMessage && <h5 className={style['error-title']}>{customMessage}</h5>}
    <div>
      <strong>{`${error.name}: ` || 'Error: '}</strong>
      {error.message}
    </div>
  </div>
);

export default ErrorMessage;
