import React from 'react';
import { storiesOf } from '@storybook/react';
import { setBackground } from '_storybook/sharedStyles';

import Loader from './Loader';

storiesOf('Loader', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center')}>{wrapInDiv()}</div>)
  .add('Dark plain', () => <Loader mode="dark" />);

storiesOf('Loader', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center', 'dark')}>{wrapInDiv()}</div>)
  .add('Light with message', () => <Loader message="Loading..." />);
