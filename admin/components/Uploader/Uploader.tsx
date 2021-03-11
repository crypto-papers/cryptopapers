import React from 'react';
import type { ChangeEvent, FC, ReactElement } from 'react';

const sendUpload = async ( file: File ): Promise<any> => {
  const data = new FormData();

  data.append('file', file);
  
  const response = await fetch('http://localhost:4000/upload', {
    body: data,
    method: 'POST',
  })

  const res = response.json();

  return await res;
}

const handleUpload = (e: ChangeEvent<HTMLInputElement>): void => {
  const { files } = e.target;
  const file = files?.[0];

  if (file) {
    sendUpload( file )
      .then( () => console.log('Success'))
      .catch(err => console.error(err));
  }
}

const Uploader: FC = (): ReactElement => (
  <form>
    <input type="file" onChange={ (e: ChangeEvent<HTMLInputElement>): void => handleUpload(e)} />
  </form>
);

Uploader.displayName = 'Uploader';

export default Uploader;