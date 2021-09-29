import React from 'react';
// import Plume from 'static/plume.svg';

import './Header.css';

interface HeaderProps {
  title: string
}

/**
 * JSX component that renders the page header.
 * @namespace Header
 */
const Header: React.FC<HeaderProps> = ({title}) => (
  <div className="header">
    <h1 className="title">{title}</h1>
    {/* <Plume className={style.plume} /> */}
  </div>
);

export default Header;
