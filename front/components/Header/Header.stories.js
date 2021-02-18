import React from 'react';
import { storiesOf } from '@storybook/react';
import { setBackground } from '_storybook/sharedStyles';

import Header from './Header';

storiesOf('Site Header', module)
  .addDecorator(wrapInDiv => <div style={setBackground()}>{wrapInDiv()}</div>)
  .add('Base header', () => <Header />);
