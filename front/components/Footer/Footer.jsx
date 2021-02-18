import React from 'react';
import BottomNav from '_components/navigation/BottomNav/BottomNav';
import SocialLinks from '_components/SocialLinks/SocialLinks';
import ReferralBadge from '_components/ReferralBadge/ReferralBadge';

import './Footer.scss';

/**
 * JSX component that renders the page footer
 * @namespace Footer
 */
const Footer = () => (
  <footer styleName='footer'>
    <div styleName='footer-container'>
      <BottomNav />
      <SocialLinks mode='light' />
      <ReferralBadge />
    </div>
  </footer>
);

export default Footer;
