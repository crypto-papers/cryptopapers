import React from 'react';

import NavList from '../NavList/NavList';
import type { INavItem } from '../NavList/NavList';

interface IBottomNavProps {
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
const BottomNav: React.VFC<IBottomNavProps> = ({ items, label = '' }) => (
  <nav aria-labelledby="bottom-nav">
    <span className="cpui-visually-hidden" id="bottom-nav">
      {label ? label : 'Footer Menu'}
    </span>
    <NavList indicator="caret" items={items} />
  </nav>
);

BottomNav.displayName = 'Navigation - Bottom';

export default BottomNav;
