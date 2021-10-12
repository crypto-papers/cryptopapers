import React from 'react';
import { Checkbox, TextArea, TextInput } from '@cryptopapers/ui';

/**
 * @component
 */
const AuthorForm: React.FC = () => (
  <form>
    <TextInput fieldName="first-name" id="first-name" label="First Name" />
    <TextInput fieldName="last-name" id="last-name" label="Last Name" />
    <TextInput fieldName="middle-name" id="middle-name" label="Middle Name" />
    <Checkbox fieldName="pseudonym" id="pseudonym" label="This name is a pseudonym" />
    <TextArea fieldName="bio" id="bio" label="Author Bio" />
  </form>
);

AuthorForm.displayName = 'Author Form';

export default AuthorForm;
