import React from 'react';

import Layout from '../components/Layout/Layout';
import PaperForm from '../components/Forms/PaperForm';

/**
 * The home page JSX component.
 * @component
 */
const HomePage: React.FC = () => (
  <Layout title="Add Paper">
    <PaperForm />
  </Layout>
);

HomePage.displayName = 'Home Page';

export default HomePage;
