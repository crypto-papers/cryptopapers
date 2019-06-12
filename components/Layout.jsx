// @flow

import * as React from 'react'

import Header from './Header'

type Props = {
  children: React.Node,
};

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = ( props: Props ) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout