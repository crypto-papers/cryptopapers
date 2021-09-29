import React from 'react';

// Import Plume from 'static/plume.svg';

import style from './Header.module.scss';

interface HeaderProps {
  readonly title: string
}

/**
 * JSX component that renders the page header.
 * @namespace Header
 */
const Header: React.FC<HeaderProps> = ({title}) => (
  <div className={style.header}>
    <h1 className={style.title}>{title}</h1>
    {/* <Plume className={style.plume} /> */}
  </div>
);

Header.displayName = 'Header';

export default Header;
