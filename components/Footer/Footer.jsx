// @flow

import React from 'react';

import BottomNav from 'components/navigation/BottomNav/BottomNav';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import ReferralTag from 'components/ReferralTag/ReferralTag';

import './Footer.scss';

/**
 * JSX component that renders the page footer
 * @namespace Footer
 */
const Footer = () => (
  <footer styleName='footer'>
    <div styleName='footer-container'>
      <BottomNav />
      <SocialLinks style='light' />
      <ReferralTag />
    </div>
  </footer>
);

export default Footer;
