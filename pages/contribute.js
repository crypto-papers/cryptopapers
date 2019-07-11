// @flow

import React from 'react';
import Markdown from 'react-markdown';

import Layout from '_components/Layout/Layout';

const contribute = `
CryptoPapers.info is a simple online archive that lists papers related to cryptocurrency. The archive includes cryptocurrency whitepapers, research papers, and technical documentation and is intended for educational purposes. This site does not provide investment advice nor does a paper's inclusion in the archive imply an endorsement of it's contents.
\n
The site's codebase, as well as the project itself are open-sourced and contributions are encouraged.
`;

const Contribute = () => (
  <Layout background={'geometric'} title={'Contribute'}>
    <Markdown source={contribute} />
  </Layout>
);

export default Contribute;
