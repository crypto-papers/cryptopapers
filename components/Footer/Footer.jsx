// @flow

import React from 'react';

import BottomNav from '../navigation/BottomNav';
import SocialLinks from '../SocialLinks/SocialLinks';
import ReferralTag from '../ReferralTag/ReferralTag';

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
