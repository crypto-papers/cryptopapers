import React, { Fragment } from 'react';
import { Footer, Header } from '@cryptopapers/ui';

import style from './Layout.module.scss';

interface ILayoutProps {
  readonly title: string;
}

/**
 * A JSX component that wraps pages with a standardized page elements.
 * @component
 * @param props
 * @param props.children - A React node(s) that will be wrapped by the layout.
 * @param props.title - The title to display at the top of the page.
 */
const Layout: React.FC<ILayoutProps> = ({ children, title }) => (
  <Fragment>
    <div className="next-content">
      <Header skip="#main-content" title="Cryptopapers Admin" />
      <main id="main-content">
        <div className="page-container">
          <h1 className={style.title}>{title}</h1>
          {children}
        </div>
      </main>
    </div>
    <Footer />
  </Fragment>
);

Layout.displayName = 'Layout';

export type { ILayoutProps };

export default Layout;
