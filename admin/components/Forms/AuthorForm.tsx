import React from 'react';
import { Checkbox, TextArea, TextInput } from '@cryptopapers/ui';

interface IAuthorFormProps {
  readonly selected: string | null;
}

/**
 * A JSX form component used to input author data.
 * @component
 * @param props
 * @param props.selected - The id of the author selected for editing.
 */
const AuthorForm: React.FC<IAuthorFormProps> = ({ selected }) => (
  <form>
    <TextInput id="first-name" label="First Name" name="first-name" />
    <TextInput id="last-name" label="Last Name" name="last-name" />
    <TextInput id="middle-name" label="Middle Name" name="middle-name" />
    <Checkbox id="pseudonym" label="This name is a pseudonym" name="pseudonym" />
    <TextArea id="bio" label="Author Bio" name="bio" />
  </form>
);

AuthorForm.displayName = 'Author Form';

export type { IAuthorFormProps };

export default AuthorForm;
