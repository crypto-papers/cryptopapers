import React from 'react';
import { TextArea, TextInput } from '@cryptopapers/ui';

import style from './UploadForm.module.scss';

const UploadForm: React.FC = () => (
  <form className={style.form}>
    <TextInput fieldName="title" id="title" label="Title" required />
    <TextInput fieldName="subtitle" id="subtitle" label="Sub-Title" />
    <TextArea fieldName="excerpt" id="excerpt" label="Excerpt" />
  </form>
);

UploadForm.displayName = 'UploadForm';

export default UploadForm;
