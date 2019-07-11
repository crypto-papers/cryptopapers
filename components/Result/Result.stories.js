// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Result from './Result';
import { mockPost, mockPostMissingData } from '../../mockdata/mockdata';
import { setBackground } from '_storybook/sharedStyles';

storiesOf('Result', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center')}>{wrapInDiv()}</div>)
  .add('With all fields', () => <Result result={mockPost} />)
  .add('Missing data', () => <Result result={mockPostMissingData} />);
