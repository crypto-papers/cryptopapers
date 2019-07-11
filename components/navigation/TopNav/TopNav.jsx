// @flow

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
    <NavList list={navLinks} classes={css.nav_link} />
  </div>
);

export default TopNav;
