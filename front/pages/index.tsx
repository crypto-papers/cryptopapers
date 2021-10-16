import React from 'react';
import Layout from 'components/Layout/Layout';
import ResultsGrid from 'components/ResultsGrid/ResultsGrid';
import { mockResults } from 'mockdata/mockdata';

/**
 * The home page JSX component.
 * @component
 */
const HomePage: React.VFC = () => (
  <Layout title="Latest Uploads">
    <ResultsGrid results={mockResults} type="results" />
  </Layout>
);

HomePage.displayName = 'Page - Home';

export default HomePage;
