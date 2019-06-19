// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import ReferralBadge from './ReferralBadge';
import { setBackground } from 'storybook/sharedStyles';

storiesOf('ReferralBadge', module)
  .addDecorator(wrapInDiv => <div style={setBackground('dark', 'center')}>{wrapInDiv()}</div>)
  .add('Brave', () => <ReferralBadge />);
