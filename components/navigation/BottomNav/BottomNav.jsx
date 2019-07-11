// @flow

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
    <NavList list={navLinks} classes={css.nav_link} />
  </div>
);

export default BottomNav;
