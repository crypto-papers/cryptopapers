import React from 'react';

// Import Plume from 'static/plume.svg';
import Plume from '../../static/plume.svg';
import style from './Header.module.scss';

interface IHeaderProps {
  readonly nav?: boolean;
  readonly skip?: string;
  readonly title: string;
}

/**
 * A JSX component that renders the page header.
 * @component
 * @param props
 * @param props.nav - Whether room should be reserved at the top of the header for the nav bar.
 * @param props.skip - The element id to be used as the destination for the skip link.
 * @param props.title - The text used to populate the header title.
 */
const Header: React.FC<IHeaderProps> = ({ nav = false, skip, title }) => (
  <div className={nav ? `${style.header} ${style['with-nav']}` : style.header}>
    {Boolean(skip) && (
      <a className={style.skip} href={skip}>
        Skip to main content
      </a>
    )}
    <a className={style['title-link']} href="/">
      <span className={style.title}>{title}</span>
    </a>
    <div className={style.plume}>
      <Plume />
    </div>
  </div>
);

Header.displayName = 'Header';

export type { IHeaderProps };

export default Header;
