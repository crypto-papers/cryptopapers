import React from 'react';
import NavList from 'components/navigation/NavList';
import { navLinks } from 'utils/navLinks';

import style from './BottomNav.module.scss';

/**
 * JSX component that renders the footer navigation menu
 * @namespace BottomNav
 */
const BottomNav = () => (
  <div className={style['bottom-nav']}>
    <NavList classes={style.nav_link} list={navLinks} />
  </div>
);

export default BottomNav;
