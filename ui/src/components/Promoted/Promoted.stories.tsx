import React from 'react';
import type { Meta } from '@storybook/react';

import Promoted from './Promoted';

const meta: Meta = {
  component: Promoted as React.VFC,
  title: 'Promoted',
};

const PromotedBadge: React.VFC = () => <Promoted />;

export { PromotedBadge };

export default meta;
