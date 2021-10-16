import React, { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BottomNav, Footer, Header, TopNav } from '@cryptopapers/ui';
import type { INavItem } from '@cryptopapers/ui';
import Meta from 'components/Meta/Meta';

import style from './Layout.module.scss';

/**
 * Contents of the page passed in to render the view.
 * @typedef ILayoutProps
 * @type {Object}
 * @property {Object[]} children - Child elements to be wrapped by the layout
 * @property {string} title - The page title
 * @memberof Layout
 */
interface ILayoutProps {
  readonly title: string;
}

const generateItem = (currentPage: string, href: string, label: string): INavItem => {
  return {
    current: currentPage === href,
    el: <Link href={href}>{label}</Link>,
    key: href,
  };
};

/**
 * A JSX component that wraps pages with a standardized page elements.
 * @component
 * @namespace Layout
 * @param props
 * @param props.children - A React node(s) that will be wrapped by the layout.
 * @param props.title - The title to display at the top of the page.
 */
const Layout: React.FC<ILayoutProps> = ({ children, title = '' }) => {
  const { pathname } = useRouter();

  const navItems = [
    generateItem(pathname, '/', 'Home'),
    generateItem(pathname, '/about', 'About'),
    generateItem(pathname, '/contribute', 'Contribute'),
  ];

  return (
    <Fragment>
      <Meta title={title} />
      <div className="cpui-next-content">
        <Header skip="#main-content" title="Cryptopapers.info" />
        <TopNav items={navItems} />
        <main id="main-content">
          <div className="cpui-page-container">
            <h1 className={style.title}>{title}</h1>
            {children}
          </div>
        </main>
      </div>
      <Footer>
        <BottomNav items={navItems} />
      </Footer>
    </Fragment>
  );
};

Layout.displayName = 'Layout';

export type { ILayoutProps };

export default Layout;
