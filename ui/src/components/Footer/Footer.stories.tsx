import React from 'react';
import type { Meta } from '@storybook/react';

import Footer from './Footer';

const meta: Meta = {
  component: Footer as React.FC,
  title: 'Layout/Footer',
};

const PrimaryFooter: React.VFC = () => <Footer />;

export { PrimaryFooter };

export default meta;
