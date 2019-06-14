// @flow

import React from 'react';

import BottomNav from 'components/navigation/BottomNav';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import ReferralTag from 'components/ReferralTag/ReferralTag';

import './Footer.scss';

const Footer = () => (
  <footer styleName='footer'>
    <div styleName='footer-container'>
      <BottomNav />
      <SocialLinks />
      <ReferralTag />
    </div>
  </footer>
);

export default Footer;
