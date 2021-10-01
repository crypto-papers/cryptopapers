import * as React from 'react';
import { Header } from '@cryptopapers/ui';

import Footer from 'components/Footer/Footer';
import Meta from 'components/Meta/Meta';
import TopNav from 'components/navigation/TopNav/TopNav';

import style from './Layout.module.scss';

/**
 * Contents of the page passed in to render the view.
 * @typedef LayoutProps
 * @type {Object}
 * @property {string=} background - Optional flag to change the background site
 * @property {Object[]} children - Child elements to be wrapped by the layout
 * @property {string} title - The page title
 * @memberof Layout
 */
type LayoutProps = {
  background?: string,
  title?: string,
};

/**
 * JSX component that renders the page content.
 * @namespace Layout
 * @param {LayoutProps} props - A post data object
 */
const Layout: React.FC<LayoutProps> = ({ background, children, title }) => {
  let bg;
  switch (background) {
    case 'geometric':
      bg = 'geo';
      break;
    case 'geometric-blue':
      bg = 'geo-blue';
      break;
    case 'herringbone-blue':
      bg = 'hbblue';
      break;
    default:
      bg = 'plain';
  }

  return (
    <React.Fragment>
      <Meta title={title} />
      <div className={`${style.content} ${style[bg]}`}>
        <TopNav />
        <Header title="Cryptopapers.info"/>
        <div className={`${style.layout} ${style[bg]}`}>
          {title && <h2>{title}</h2>}
          {children}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
