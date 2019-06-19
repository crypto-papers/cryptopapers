// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialLinks from './SocialLinks';
import { setBackground } from 'storybook/sharedStyles';

storiesOf('SocialLinks', module)
  .addDecorator(wrapInDiv => <div style={setBackground('dark', 'center')}>{wrapInDiv()}</div>)
  .add('Light', () => <SocialLinks mode='light' />);

storiesOf('SocialLinks', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center')}>{wrapInDiv()}</div>)
  .add('Dark', () => <SocialLinks mode='dark' />);
