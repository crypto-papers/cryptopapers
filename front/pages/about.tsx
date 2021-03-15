import React from 'react';

import AboutMdx from 'static/mdx/about.mdx';
import Layout from 'components/Layout/Layout';

const About = () => (
  <Layout background="herringbone-blue" title="About Us">
    <AboutMdx />
  </Layout>
);

export default About;
