// @flow

import React from 'react';
import App, { Container } from 'next/app';

import 'styles/global.scss';

type Props = {
  Component: any,
  ctx: any,
};

class CryptoPapers extends App {
  static async getInitialProps({ Component, ctx }: Props) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default CryptoPapers;
