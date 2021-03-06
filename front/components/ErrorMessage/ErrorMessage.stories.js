import React from 'react';
import { storiesOf } from '@storybook/react';
import { setBackground } from '_storybook/sharedStyles';

import ErrorMessage from './ErrorMessage';

const customMessage = 'Whoops!';

const error = {
  message: 'JSON.parse: unexpected character at line 1 column 1 of the JSON data',
  name: 'SyntaxError',
};

storiesOf('Error Message', module)
  .addDecorator(wrapInDiv => <div style={setBackground('center')}>{wrapInDiv()}</div>)
  .add('With custom message', () => <ErrorMessage customMessage={customMessage} error={error} />)
  .add('Plain', () => <ErrorMessage error={error} />);
