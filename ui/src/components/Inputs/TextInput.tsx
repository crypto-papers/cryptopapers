import React from 'react';

import Input from './Input';

interface ITextInput {
  readonly fieldName: string;
  readonly id: string;
  readonly label: string;
  readonly required?: boolean;
}

const TextInput: React.FC<ITextInput> = ({ fieldName, id, label, required }) => (
  <Input fieldName={fieldName} id={id} label={label} required={required} type="text" />
);

TextInput.displayName = 'Text Input';

export default TextInput;
