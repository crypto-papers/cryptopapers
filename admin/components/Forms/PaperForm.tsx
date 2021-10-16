import React from 'react';
import { Button, TextArea, TextInput } from '@cryptopapers/ui';

/**
 * A JSX form component used to input paper data.
 * @component
 */
const PaperForm: React.FC = () => (
  <form>
    <TextInput id="title" label="Title" name="title" required />
    <TextInput id="subtitle" label="Sub-Title" name="subtitle" />
    <TextArea id="excerpt" label="Excerpt" name="excerpt" />
    <Button label="Submit" variant="primary" onClick={(): void => {}} />
  </form>
);

PaperForm.displayName = 'Paper Form';

export default PaperForm;
