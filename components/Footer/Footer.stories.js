// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';
import { setBackground } from '_storybook/sharedStyles';

storiesOf('Site Footer', module)
  .addDecorator(wrapInDiv => <div style={setBackground()}>{wrapInDiv()}</div>)
  .add('Base Footer', () => <Footer />);
