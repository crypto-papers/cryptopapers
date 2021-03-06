import React from 'react';
import type { ChangeEvent, FC, ReactElement } from 'react';

const handleUpload = (e: ChangeEvent<HTMLInputElement>): void => {
  const { files } = e.target;
  const file = files?.[0];

  if (file) {
    const data = new FormData;

    data.append('file', file);
  }

  console.log(file);
}

const Uploader: FC = (): ReactElement => (
  <form>
    <input type="file" onChange={ (e: ChangeEvent<HTMLInputElement>): void => handleUpload(e)} />
  </form>
);

Uploader.displayName = 'Uploader';

export default Uploader;