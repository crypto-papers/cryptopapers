import React from 'react';
import { storiesOf } from '@storybook/react';

import Featured from './Featured';
import { mockPost, mockPostMissingData } from '../../mockdata/mockdata';
import { setBackground } from '_storybook/sharedStyles';

storiesOf('Featured', module)
  .addDecorator(wrapInDiv => <div style={setBackground()}>{wrapInDiv()}</div>)
  .add('With all fields', () => <Featured paperData={mockPost} />)
  .add('Missing data', () => <Featured paperData={mockPostMissingData} />);
