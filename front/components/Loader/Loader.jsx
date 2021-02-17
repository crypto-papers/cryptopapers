// @flow

import React from 'react';

import './Loader.scss';

/**
 * JSX component that renders a bouncing ellipse loader item
 * @param {string=} message - Optional message added above the loader
 * @param {string=} mode - Optional flag to toggle on the dark version of the loader
 */
const Loader = ({ message, mode }: { message?: string, mode?: 'dark' }) => {
  const variant = mode === 'dark' ? 'dark' : 'light';

  return (
    <div styleName='bouncing-loader-container'>
      <p styleName={`${variant}-message`}>{message}</p>
      <div styleName='bouncing-loader'>
        <div styleName={`bouncing-loader-ellipse ${variant}`} />
        <div styleName={`bouncing-loader-ellipse ${variant}`} />
        <div styleName={`bouncing-loader-ellipse ${variant}`} />
      </div>
    </div>
  );
};

export default Loader;
