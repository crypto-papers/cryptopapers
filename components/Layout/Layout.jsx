// @flow

import * as React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Meta from '../Meta';
import TopNav from '../navigation/TopNav/TopNav';

import './Layout.scss';

type Props = {
  children: React.Node,
};

const Layout = (props: Props) => (
  <React.Fragment>
    <Meta />
    <TopNav />
    <Header />
    <div styleName='layout'>{props.children}</div>
    <Footer />
  </React.Fragment>
);

export default Layout;
