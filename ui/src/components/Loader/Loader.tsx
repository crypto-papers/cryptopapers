import React from 'react';

import style from './Loader.module.scss';

interface LoaderProps {
  readonly message?: string;
  readonly mode?: string;
}

/**
 * A JSX component that renders a bouncing ellipse loader animation.
 * @param props
 * @param props.message - Optional message added above the loader.
 * @param props.mode - Optional flag to toggle on the dark version of the loader.
 */
const Loader: React.FC<LoaderProps> = ({ message, mode = 'dark' }) => {
  const variant = mode === 'dark' ? style.dark : style.light;

  return (
    <div className={style['bouncing-loader-container']}>
      <p className={style[`${mode}-message`]}>{message}</p>
      <div className={style['bouncing-loader']}>
        <div className={`${style['bouncing-loader-ellipse']} ${variant}`} />
        <div className={`${style['bouncing-loader-ellipse']} ${variant}`} />
        <div className={`${style['bouncing-loader-ellipse']} ${variant}`} />
      </div>
    </div>
  );
};

Loader.displayName = 'Loader';

export type { LoaderProps };

export default Loader;
