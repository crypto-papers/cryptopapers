import React from 'react';
import type { Meta } from '@storybook/react';

import BlockQuote from './BlockQuote';

const meta: Meta = {
  component: BlockQuote,
  title: 'Block Quote',
};

const mockQuote = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'

const Quote: React.VFC = () => <BlockQuote quote={mockQuote} />;

export {
  Quote
};

export default meta;

