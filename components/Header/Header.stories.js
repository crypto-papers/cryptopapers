// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';
import { setBackground } from 'storybook/sharedStyles';

storiesOf('Site Header', module)
  .addDecorator(wrapInDiv => <div style={setBackground()}>{wrapInDiv()}</div>)
  .add('Base header', () => <Header />);
