import Layout from 'components/Layout/Layout';
import ResultsGrid from 'components/ResultsGrid/ResultsGrid';

import { mockResults } from 'mockdata/mockdata';

const HomePage = () => (
  <Layout>
    <h2 style={{ marginBottom: '0' }}>Latest Uploads:</h2>
    <ResultsGrid results={mockResults} type="results" />
  </Layout>
);

export default HomePage;
