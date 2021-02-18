import React from 'react';
import { storiesOf } from '@storybook/react';
import { setBackground } from '_storybook/sharedStyles';

import Featured from './Featured';
import { mockPost, mockPostMissingData } from '../../mockdata/mockdata';

storiesOf('Featured', module)
  .addDecorator(wrapInDiv => <div style={setBackground()}>{wrapInDiv()}</div>)
  .add('With all fields', () => <Featured paperId={mockPost} promoted />)
  .add('Missing data', () => <Featured paperId={mockPostMissingData} />);
