// @flow

import * as React from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Meta from 'components/Meta';
import TopNav from 'components/navigation/TopNav/TopNav';

import './Layout.scss';

type Props = {
  children: React.Node,
  title?: string,
};

const Layout = ({ children, title }: Props) => (
  <React.Fragment>
    <Meta title={title} />
    <div styleName='content'>
      <TopNav />
      <Header />
      <div styleName='layout'>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
    <Footer />
  </React.Fragment>
);

export default Layout;
