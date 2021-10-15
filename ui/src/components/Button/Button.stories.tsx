import React from 'react';
import type { Meta } from '@storybook/react';

import Button from './Button';

const meta: Meta = {
  component: Button as React.FC,
  title: 'Components/Button',
};

const containerStyle = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifyItems: 'center',
  margin: '1rem 0',
};

const mockOnClick = (e: React.MouseEvent): void => {
  const { name: btnName } = e.target as HTMLButtonElement; // eslint-disable-line

  console.log(`Clicked on ${btnName}`);
};

const BasicButtons: React.VFC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={containerStyle}>
      <Button label="Default Variant" name="default" onClick={mockOnClick} />
      <Button label="Default Outline" name="default-outline" outline onClick={mockOnClick} />
      <Button disabled label="Default Disabled" name="default-disabled" onClick={mockOnClick} />
      <Button
        disabled
        label="Default Outline Disabled"
        name="default-outline-disabled"
        outline
        onClick={mockOnClick}
      />
    </div>
    <div style={containerStyle}>
      <Button label="Primary Variant" name="primary" variant="primary" onClick={mockOnClick} />
      <Button
        label="Primary Outline"
        name="primary-outline"
        outline
        variant="primary"
        onClick={mockOnClick}
      />
      <Button
        disabled
        label="Primary Disabled"
        name="primary-disabled"
        variant="primary"
        onClick={mockOnClick}
      />
      <Button
        disabled
        label="Primary Outline Disabled"
        name="primary-outline-disabled"
        outline
        variant="primary"
        onClick={mockOnClick}
      />
    </div>
    <div style={containerStyle}>
      <Button
        label="Secondary Variant"
        name="secondary"
        variant="secondary"
        onClick={mockOnClick}
      />
      <Button
        label="Secondary Outline"
        name="secondary-outline"
        outline
        variant="secondary"
        onClick={mockOnClick}
      />
      <Button
        disabled
        label="Secondary Disabled"
        name="secondary-disabled"
        variant="secondary"
        onClick={mockOnClick}
      />
      <Button
        disabled
        label="Secondary Outline Disabled"
        name="secondary-outline-disabled"
        outline
        variant="secondary"
        onClick={mockOnClick}
      />
    </div>
    <div style={containerStyle}>
      <Button label="Danger Variant" name="danger" variant="danger" onClick={mockOnClick} />
      <Button
        label="Danger Outline"
        name="danger-outline"
        outline
        variant="danger"
        onClick={mockOnClick}
      />
      <Button
        disabled
        label="Danger Disabled"
        name="danger-disabled"
        variant="danger"
        onClick={mockOnClick}
      />
      <Button
        disabled
        label="Danger Outline Disabled"
        name="danger-outline-disabled"
        outline
        variant="danger"
        onClick={mockOnClick}
      />
    </div>
  </div>
);

export { BasicButtons };

export default meta;
