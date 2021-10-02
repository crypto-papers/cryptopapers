import React from 'react';

import style from './BlockQuote.module.scss';

interface BlockQuoteProps {
  readonly quote: string;
}

/**
 * JSX component that renders a bouncing ellipse loader item
 * @param quote - Text to display in blockquote format.
 */
const BlockQuote: React.FC<BlockQuoteProps> = ({ quote }) => (
  <div>
    <p className={style['blockquote-text']}>{quote}</p>
  </div>
);

BlockQuote.displayName = 'BlockQuote';

export type { BlockQuoteProps };

export default BlockQuote;
