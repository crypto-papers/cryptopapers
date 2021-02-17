// @flow

import React from 'react';

import './BlockQuote.scss';

const BlockQuote = ({ quote }: { quote: string }) => (
  <div>
    <p styleName='blockquote-text'>{quote}</p>
  </div>
);

export default BlockQuote;
