import React from 'react';

import style from './BlockQuote.module.scss';

interface IBlockQuoteProps {
  readonly cite?: string;
  readonly quote: string;
  readonly source?: string;
  readonly speaker?: string;
}

/**
 * A JSX component that is used to display extended quotations.
 * @component
 * @param props
 * @param props.cite - A URL to point the user to the source of the quotation.
 * @param props.quote - The quoted text to display in blockquote format.
 * @param props.source - The human readable text used to identify the source (cite) of the quote.
 * @param props.speaker - The person or group the quotation is attributed to.
 */
const BlockQuote: React.FC<IBlockQuoteProps> = ({ cite, quote, source = '', speaker = '' }) => (
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

export type { IBlockQuoteProps };

export default BlockQuote;
