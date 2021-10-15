import React from 'react';
import type { Meta, Story } from '@storybook/react';

import Loader from './Loader';
import type { LoaderProps } from './Loader';

const meta: Meta = {
  args: {
    mode: 'dark',
  },
  argTypes: {
    mode: {
      control: { type: 'radio' },
      defaultValue: 'dark',
      options: ['dark', 'light'],
      table: {
        defaultValue: { summary: 'dark' },
      },
    },
  },
  component: Loader as React.FC,
  title: 'Loader',
};

const Template: Story<LoaderProps> = ({ message, mode }) => (
  <Loader message={message} mode={mode} />
);

const Plain = Template.bind({});
const WithMessage = Template.bind({});

WithMessage.args = {
  message: 'Loading...',
};

WithMessage.argTypes = {
  message: {
    control: { type: 'text' },
  },
};

export { Plain, WithMessage };

export default meta;
