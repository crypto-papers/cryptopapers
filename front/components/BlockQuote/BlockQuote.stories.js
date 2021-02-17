// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import BlockQuote from './BlockQuote';
import { mockPost } from '../../mockdata/mockdata';
import { setBackground } from '_storybook/sharedStyles';

storiesOf('BlockQuote', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center')}>{wrapInDiv()}</div>)
  .add('Example block quote', () => <BlockQuote quote={mockPost.excerpt} />);
