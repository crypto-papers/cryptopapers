// @flow

import React, { Fragment } from 'react';
import Link from 'next/link';

import type { NavItem } from 'utils/navLinks';

type Props = {
  classes?: string,
  list: Array<NavItem>,
};

const NavList = ({ classes, list }: Props) => (
  <Fragment>
    {list.map(link => (
      <Link href={link.href} key={link.title.toLowerCase()}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={classes}>{link.title}</a>
      </Link>
    ))}
  </Fragment>
);

export default NavList;
