import React from 'react';

import style from './NavList.module.scss';

interface INavItem {
  readonly current: boolean;
  readonly el: React.ReactElement;
  readonly key: string;
}

interface INavProps {
  readonly horizontal?: boolean;
  readonly indicator?: 'caret' | 'underline';
  readonly items: INavItem[];
}

/**
 * A JSX component that renders a list of navigation links.
 * @component
 * @param props
 * @param props.horizontal - Whether the menu should be rendered horizontally on non-mobile screens.
 * @param props.indicator - Identifies what styling to apply to an active selected menu item.
 * @param props.items - A list of link elements to render into the navigation list.
 */
const NavList: React.VFC<INavProps> = ({ horizontal = false, indicator = 'underline', items }) => {
  const liStyle = `${style.item} ${style[indicator]}`;

  return (
    <ul className={horizontal ? `${style.list} ${style.horizontal}` : style.list}>
      {items.map(item => (
        <li key={item.key} className={item.current ? `${liStyle} ${style.current}` : liStyle}>
          {item.current && <span className="cpui-visually-hidden">Current Page: </span>}
          {item.el}
        </li>
      ))}
    </ul>
  );
};

NavList.displayName = 'Navigation - List';

export type { INavItem, INavProps };

export default NavList;
