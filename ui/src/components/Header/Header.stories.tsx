import React from 'react';
import type { Meta } from '@storybook/react';

// Import { setBackground } from '_storybook/sharedStyles';

import Header from './Header';

const meta: Meta = {
  component: Header,
  title: 'Site header',
};

const Primary: React.VFC = () => <Header title="Cryptopapers.info" />;

export {
  Primary
};

export default meta;
