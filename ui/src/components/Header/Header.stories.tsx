import React from 'react';
import type { Meta } from '@storybook/react';

// Import { setBackground } from '_storybook/sharedStyles';

import Header from './Header';

const meta: Meta = {
  component: Header,
  title: 'Layout/Header',
};

const PrimaryHeader: React.VFC = () => <Header title="Cryptopapers.info" />;

export { PrimaryHeader };

export default meta;
