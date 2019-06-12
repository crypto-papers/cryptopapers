// @flow

import React from 'react'
import Link from 'next/link'

import BottomNavigation from './BottomNavigation';
import SocialLinks from './SocialLinks';
import ReferralTag from './ReferralTag';

const footerStyle = {
  backgroundColor: '#0f4385',
}

const footerNavStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
}

const Footer = () => (
  <footer className='site_footer' style={ footerStyle}>
    <div className='footer_nav_container' style={ footerNavStyle }>
      <BottomNavigation />
      <SocialLinks />
      <ReferralTag />
    </div>
</footer>
);

export default Footer;