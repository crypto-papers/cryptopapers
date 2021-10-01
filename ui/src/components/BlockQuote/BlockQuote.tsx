import React from 'react';

import style from './BlockQuote.module.scss';

interface BlockQuoteProps {
  readonly quote: string
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ quote }) => (
  <div>
    <p className={style['blockquote-text']}>{quote}</p>
  </div>
);

BlockQuote.displayName = 'BlockQuote';

export default BlockQuote;
