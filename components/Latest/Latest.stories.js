import React from 'react';
import { storiesOf } from '@storybook/react';

import Latest from './Latest';
import { mockPost } from '../../mockdata/mockdata';
import { setBackground } from 'storybook/sharedStyles';

import 'styles/global.scss';

storiesOf('Latest', module)
  .addDecorator(wrapInDiv => <div style={setBackground()}>{wrapInDiv()}</div>)
  .add('Homepage View', () => <Latest postData={mockPost} />);
