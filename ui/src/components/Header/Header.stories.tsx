import React from 'react';
import type { Meta } from '@storybook/react';

import Header from './Header';

const meta: Meta = {
  component: Header as React.VFC,
  title: 'Layout/Header',
};

const PrimaryHeader: React.VFC = () => <Header title="Cryptopapers.info" />;

export { PrimaryHeader };

export default meta;
