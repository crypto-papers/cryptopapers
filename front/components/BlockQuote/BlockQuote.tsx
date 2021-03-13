import React from 'react';

import style from './BlockQuote.module.scss';

const BlockQuote = ({ quote }: { quote: string }) => (
  <div>
    <p className={style['blockquote-text']}>{quote}</p>
  </div>
);

export default BlockQuote;
