import React, { Fragment } from 'react';
import Link from 'next/link';

import type { NavItem } from 'utils/navLinks';

/**
 * List of pages to add to a navigation menu.
 * @typedef NavListProps
 * @type {Object}
 * @property {string=} classes - Optional classes to apply to anchor element
 * @property {NavItem[]} list - Array of page, url key pairs to show in list
 * @memberof NavList
 */
type NavListProps = {
  classes?: string,
  list: Array<NavItem>,
};

/**
 * JSX component that generates a list of menu items
 * @namespace NavList
 * @param {NavListProps} props - List of pages to add to a navigation menu.
 */
const NavList = ({ classes, list }: NavListProps) => (
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
