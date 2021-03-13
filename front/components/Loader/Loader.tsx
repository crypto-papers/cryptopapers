import React from 'react';

import style from './Loader.module.scss';

/**
 * JSX component that renders a bouncing ellipse loader item
 * @param {string=} message - Optional message added above the loader
 * @param {string=} mode - Optional flag to toggle on the dark version of the loader
 */
const Loader = ({ message, mode }: { message?: string, mode?: 'dark' }) => {
  const variant = mode === 'dark' ? 'dark' : 'light';

  return (
    <div className={style['bouncing-loader-container']}>
      <p className={style[`${variant}-message`]}>{message}</p>
      <div className={style['bouncing-loader']}>
        <div className={style[`bouncing-loader-ellipse ${variant}`]} />
        <div className={style[`bouncing-loader-ellipse ${variant}`]} />
        <div className={style[`bouncing-loader-ellipse ${variant}`]} />
      </div>
    </div>
  );
};

export default Loader;
