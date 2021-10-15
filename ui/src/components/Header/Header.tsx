import React from 'react';

// Import Plume from 'static/plume.svg';

import style from './Header.module.scss';

interface IHeaderProps {
  readonly skip?: string;
  readonly title: string;
}

/**
 * A JSX component that renders the page header.
 * @component
 * @param props
 * @param props.skip - The element id to be used as the destination for the skip link.
 * @param props.title - The text used to populate the header title.
 */
const Header: React.FC<IHeaderProps> = ({ skip, title }) => (
  <div className={style.header}>
    {Boolean(skip) && (
      <a className={style.skip} href={skip}>
        Skip to main content
      </a>
    )}
    <a className={style['title-link']} href="/">
      <span className={style.title}>{title}</span>
    </a>
    {/* <Plume className={style.plume} /> */}
  </div>
);

Header.displayName = 'Header';

export type { IHeaderProps };

export default Header;
