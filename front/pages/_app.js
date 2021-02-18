import React from 'react';
import App, { Container } from 'next/app';

import 'styles/global.scss';

class CryptoPapers extends App {
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
