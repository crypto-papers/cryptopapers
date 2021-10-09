import React, { Fragment } from 'react';
import { Footer, Header } from '@cryptopapers/ui';

import UploadForm from '../components/UploadForm/UploadForm';

const HomePage: React.FC = () => (
  <Fragment>
    <Header title="Cryptopapers Admin" />
    <main>
      <UploadForm />
    </main>
    <Footer />
  </Fragment>
);

HomePage.displayName = 'HomePage';

export default HomePage;
