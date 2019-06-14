// @flow

import * as React from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Meta from 'components/Meta';
import TopNav from 'components/navigation/TopNav/TopNav';

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
