import React from 'react';
import BottomNav from 'components/navigation/BottomNav/BottomNav';
// import SocialLinks from 'components/SocialLinks/SocialLinks';

import style from './Footer.module.scss';

/**
 * JSX component that renders the page footer
 * @namespace Footer
 */
const Footer = () => (
  <footer className={style.footer}>
    <div className={style['footer-container']}>
      <BottomNav />
      {/* <SocialLinks mode='light' /> */}
    </div>
  </footer>
);

export default Footer;
