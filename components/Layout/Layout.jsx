// @flow

import * as React from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Meta from 'components/Meta';
import TopNav from 'components/navigation/TopNav/TopNav';

import './Layout.scss';

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
  children: React.Node,
  title?: string,
};

/**
 * JSX component that renders the page content.
 * @namespace Layout
 * @param {LayoutProps} props - A post data object
 */
const Layout = ({ background, children, title }: LayoutProps) => {
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
      <div styleName={`content ${bg}`}>
        <TopNav />
        <Header />
        <div styleName={`layout ${bg}`}>
          {title && <h2>{title}</h2>}
          {children}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
