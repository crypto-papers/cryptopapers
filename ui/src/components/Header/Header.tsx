import React from 'react';

// Import Plume from 'static/plume.svg';

import style from './Header.module.scss';

interface HeaderProps {
  readonly skip?: string;
  readonly title: string;
}

/**
 * JSX component that renders the page header.
 * @component
 * @param skip - The element id to be used as the destination for the skp link.
 * @param title - The text used to populate the header title.
 */
const Header: React.FC<HeaderProps> = ({ skip = null, title }) => (
  <div className={style.header}>
    {skip !== null && (
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

export type { HeaderProps };

export default Header;
