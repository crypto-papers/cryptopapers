import React from 'react';
import { render, screen as tlScreen } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  const title = 'Cryptopapers';

  it('renders without crashing', () => {
    render(<Header title={title} />);

    expect(tlScreen.getByRole('heading')).toHaveTextContent(title);
  });
});
