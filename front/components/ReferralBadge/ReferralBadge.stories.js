import React from 'react';
import { storiesOf } from '@storybook/react';
import { setBackground } from '_storybook/sharedStyles';

import ReferralBadge from './ReferralBadge';

storiesOf('ReferralBadge', module)
  .addDecorator(wrapInDiv => <div style={setBackground('dark', 'center')}>{wrapInDiv()}</div>)
  .add('Brave', () => <ReferralBadge />);
