import React from 'react';

import Input from './Input';

interface ITextArea {
  readonly fieldName: string;
  readonly id: string;
  readonly label: string;
  readonly required?: boolean;
}

const TextArea: React.FC<ITextArea> = ({ fieldName, id, label, required }) => (
  <Input fieldName={fieldName} id={id} label={label} required={required} type="textarea" />
);

TextArea.displayName = 'Text Input';

export default TextArea;
