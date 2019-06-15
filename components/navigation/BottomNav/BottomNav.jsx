// @flow

import React from 'react';

import NavList from 'components/navigation/NavList';
import { navLinks } from 'utils/navLinks';

import css from './BottomNav.scss';

const BottomNav = () => (
  <div styleName='bottom-nav'>
    <NavList list={navLinks} classes={css.nav_link} />
  </div>
);

export default BottomNav;
