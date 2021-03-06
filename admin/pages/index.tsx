import React from 'react';
import type { FC, ReactElement } from 'react';

import Uploader from '../components/Uploader/Uploader';

const HomePage: FC = (): ReactElement => (
  <main>
    <Uploader />
  </main>
);

HomePage.displayName = 'HomePage'

export default HomePage
