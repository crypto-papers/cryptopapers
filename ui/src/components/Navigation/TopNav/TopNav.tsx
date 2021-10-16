import React from 'react';

import NavList from '../NavList/NavList';
import type { INavItem } from '../NavList/NavList';
import style from './TopNav.module.scss';

interface ITopNavProps {
  readonly items: INavItem[];
  readonly label?: string;
}

/**
 * A JSX component that renders the navigation menu at the top of the page.
 * @component
 * @param props
 * @param props.items - A list of link elements to render into the navigation list.
 * @param props.label - A name used to distinguish between multiple menus on the page.
 */
const TopNav: React.VFC<ITopNavProps> = ({ items, label = '' }) => (
  <nav aria-labelledby="top-nav" className={style.top}>
    <span className="cpui-visually-hidden" id="top-nav">
      {label ? label : 'Main Menu'}
    </span>
    <NavList horizontal items={items} />
  </nav>
);

TopNav.displayName = 'Navigation - Top';

export default TopNav;
