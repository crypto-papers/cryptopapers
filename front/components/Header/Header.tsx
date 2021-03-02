import React from 'react';
// import Plume from 'static/plume.svg';

import style from './Header.module.scss';

/**
 * JSX component that renders the page header
 * @namespace Header
 */
const Header = () => (
  <div className={style.header}>
    <h1 className={style.title}>CryptoPapers.info</h1>
    {/* <Plume className={style.plume} /> */}
  </div>
);

export default Header;
