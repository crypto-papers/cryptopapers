import React from 'react';

import style from './BlockQuote.module.scss';

interface BlockQuoteProps {
  readonly cite?: string;
  readonly quote: string;
  readonly source?: string;
  readonly speaker?: string;
}

/**
 * JSX component that renders a bouncing ellipse loader item
 * @param cite - A URL to point the user to the source of the quotation.
 * @param quote - Text to display in blockquote format.
 */
const BlockQuote: React.FC<BlockQuoteProps> = ({ cite, quote, source = '', speaker = '' }) => (
  <blockquote cite={cite} className={style.blockquote}>
    <p className={style.text}>{quote}</p>
    {(source || speaker) && (
      <figcaption className={style.caption}>
        {speaker ? <span>{speaker}</span> : ''}
        {speaker && source ? ', ' : ''}
        {source ? <cite>{source}</cite> : ''}
      </figcaption>
    )}
  </blockquote>
);

BlockQuote.displayName = 'BlockQuote';

export type { BlockQuoteProps };

export default BlockQuote;
