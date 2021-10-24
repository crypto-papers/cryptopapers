import React from 'react';
import type { Meta } from '@storybook/react';

import ErrorMessage from './ErrorMessage';

const meta: Meta = {
  component: ErrorMessage as React.VFC,
  title: 'Components/ErrorMessage',
};

const mockError = {
  message: 'Additional information that describes the error',
  name: 'Mock Error 321',
};

const ErrorGeneral: React.VFC = () => <ErrorMessage error={mockError} />;

const ErrorWithHeader: React.VFC = () => (
  <ErrorMessage customMessage="This will appear at the top" error={mockError} />
);

export { ErrorGeneral, ErrorWithHeader };

export default meta;
