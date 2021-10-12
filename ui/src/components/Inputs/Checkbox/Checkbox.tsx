import React from 'react';

import Input from '../Input/Input';

interface ICheckbox {
  readonly fieldName: string;
  readonly id: string;
  readonly label: string;
  readonly required?: boolean;
}

const Checkbox: React.FC<ICheckbox> = ({ fieldName, id, label, required }) => (
  <Input fieldName={fieldName} id={id} label={label} required={required} type="checkbox" />
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
