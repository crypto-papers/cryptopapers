import React, { Fragment } from 'react';
import { BottomNav, Footer, Header, TopNav } from '@cryptopapers/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { INavItem } from '@cryptopapers/ui';

import style from './Layout.module.scss';

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
 * @param props
 * @param props.children - A React node(s) that will be wrapped by the layout.
 * @param props.title - The title to display at the top of the page.
 */
const Layout: React.FC<ILayoutProps> = ({ children, title }) => {
  const { pathname } = useRouter();

  const navItems = [
    generateItem(pathname, '/', 'Home'),
    generateItem(pathname, '/manage', 'Manage Resources'),
  ];

  return (
    <Fragment>
      <div className="cpui-next-content">
        <Header nav skip="#main-content" title="Cryptopapers Admin" />
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
