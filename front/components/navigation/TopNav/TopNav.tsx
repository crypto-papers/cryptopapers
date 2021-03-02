import React from 'react';
import NavList from 'components/navigation/NavList';
import { navLinks } from 'utils/navLinks';

import style from './TopNav.module.scss';

/**
 * JSX component that renders the navigation menu at the top of the page
 * @namespace TopNav
 */
const TopNav = () => (
  <div className={style['top-nav']}>
    <NavList classes={style.nav_link} list={navLinks} />
  </div>
);

export default TopNav;
