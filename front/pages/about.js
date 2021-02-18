import React from 'react';
import AboutMdx from '_static/mdx/about.mdx';
import Layout from '_components/Layout/Layout';

const About = () => (
  <Layout background="herringbone-blue" title="About Us">
    <AboutMdx />
  </Layout>
);

export default About;
