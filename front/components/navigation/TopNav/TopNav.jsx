import React from 'react';
import NavList from '_components/navigation/NavList';
import { navLinks } from '_utils/navLinks';

import css from './TopNav.scss';

/**
 * JSX component that renders the navigation menu at the top of the page
 * @namespace TopNav
 */
const TopNav = () => (
  <div styleName='top-nav'>
    <NavList classes={css.nav_link} list={navLinks} />
  </div>
);

export default TopNav;
