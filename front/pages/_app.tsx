import React from 'react';
import App from 'next/app';

import '../styles/global.scss';

class CryptoPapers extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (<Component {...pageProps} />);
  }
}

export default CryptoPapers;
