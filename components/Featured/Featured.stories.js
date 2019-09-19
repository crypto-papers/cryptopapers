// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Featured from './Featured';
import { mockPost, mockPostMissingData } from '../../mockdata/mockdata';
import { setBackground } from '_storybook/sharedStyles';

storiesOf('Featured', module)
  .addDecorator(wrapInDiv => <div style={setBackground()}>{wrapInDiv()}</div>)
  .add('With all fields', () => <Featured paperId={mockPost} promoted />)
  .add('Missing data', () => <Featured paperId={mockPostMissingData} />);
