import React from 'react';
import { storiesOf } from '@storybook/react';

import Featured from './Featured';
import { mockPost } from '../../mockdata/mockdata';
import { setBackground } from 'storybook/sharedStyles';

storiesOf('Featured', module)
  .addDecorator(wrapInDiv => <div style={setBackground()}>{wrapInDiv()}</div>)
  .add('Homepage View', () => <Featured postData={mockPost} />);
