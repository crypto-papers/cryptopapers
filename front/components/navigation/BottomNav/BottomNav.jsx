import React from 'react';
import NavList from '_components/navigation/NavList';
import { navLinks } from '_utils/navLinks';

import css from './BottomNav.scss';

/**
 * JSX component that renders the footer navigation menu
 * @namespace BottomNav
 */
const BottomNav = () => (
  <div styleName='bottom-nav'>
    <NavList classes={css.nav_link} list={navLinks} />
  </div>
);

export default BottomNav;
