// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from './Loader';
import { setBackground } from 'storybook/sharedStyles';

storiesOf('Loader', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center')}>{wrapInDiv()}</div>)
  .add('Dark', () => <Loader mode='dark' />);

storiesOf('Loader', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center', 'dark')}>{wrapInDiv()}</div>)
  .add('Light', () => <Loader />);
