import React from 'react';
import { storiesOf } from '@storybook/react';
import { setBackground } from '_storybook/sharedStyles';

import SocialLinks from './SocialLinks';

storiesOf('SocialLinks', module)
  .addDecorator(wrapInDiv => <div style={setBackground('dark', 'center')}>{wrapInDiv()}</div>)
  .add('Light', () => <SocialLinks mode="light" />);

storiesOf('SocialLinks', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center')}>{wrapInDiv()}</div>)
  .add('Dark', () => <SocialLinks mode="dark" />);
