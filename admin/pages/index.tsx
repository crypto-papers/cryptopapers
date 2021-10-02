import React from 'react';
import { Header } from '@cryptopapers/ui/';

import Uploader from '../components/Uploader/Uploader';

const HomePage: React.FC = () => (
  <main>
    <Header title="Cryptopapers Admin" />
    <Uploader />
  </main>
);

HomePage.displayName = 'HomePage';

export default HomePage;
