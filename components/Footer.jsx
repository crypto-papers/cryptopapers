// @flow

import React from 'react'
import Link from 'next/link'

import BottomNav from './navigation/BottomNav';
import SocialLinks from './SocialLinks';
import ReferralTag from './ReferralTag';

import { colors, gradients } from '../styles/colors';

const footerStyle = {
  background: colors.darkBlue,
  background: gradients.darkLightBlue,
  padding: '1rem',
}

const footerNavStyle = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
}

const Footer = () => (
  <footer className='site_footer' style={ footerStyle}>
    <div className='footer_nav_container' style={ footerNavStyle }>
      <BottomNav />
      <SocialLinks />
      <ReferralTag />
    </div>
</footer>
);

export default Footer;