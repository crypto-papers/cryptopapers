import React from 'react';
import { storiesOf } from '@storybook/react';
import { setBackground } from '_storybook/sharedStyles';

import BlockQuote from './BlockQuote';
import { mockPost } from '../../mockdata/mockdata';

storiesOf('BlockQuote', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center')}>{wrapInDiv()}</div>)
  .add('Example block quote', () => <BlockQuote quote={mockPost.excerpt} />);
