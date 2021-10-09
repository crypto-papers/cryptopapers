import React, { Fragment } from 'react';
import { Footer, Header } from '@cryptopapers/ui';

import UploadForm from '../components/UploadForm/UploadForm';

const HomePage: React.FC = () => (
  <Fragment>
    <div className="content">
      <Header title="Cryptopapers Admin" />
      <main>
        <UploadForm />
      </main>
    </div>
    <Footer />
  </Fragment>
);

HomePage.displayName = 'HomePage';

export default HomePage;
