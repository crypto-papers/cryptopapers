import React from 'react';
import { Meta } from '@storybook/react';
// import { setBackground } from '_storybook/sharedStyles';

import Header from './Header';

const meta: Meta = {
  component: Header,
  title: 'Site header',
};

export default meta;

export const Primary: React.VFC<{}> = () => <Header title="Cryptopapers.info" />;
