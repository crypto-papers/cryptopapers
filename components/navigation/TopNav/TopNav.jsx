// @flow

import React from 'react';

import NavList from 'components/navigation/NavList';
import { navLinks } from 'utils/navLinks';

import css from './TopNav.scss';

const TopNav = () => (
  <div styleName='top-nav'>
    <NavList list={navLinks} classes={css.nav_link} />
  </div>
);

export default TopNav;
