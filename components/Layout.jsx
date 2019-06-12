// @flow

import * as React from 'react'

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type Props = {
  children: React.Node,
};

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = ( props: Props ) => (
  <React.Fragment>
    <Meta />
    <Header />
    <div style={layoutStyle}>
      {props.children}
    </div>
    <Footer />
  </React.Fragment>
)

export default Layout