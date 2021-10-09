import React from 'react';

// Import SocialLinks from 'components/SocialLinks/SocialLinks';

import style from './Footer.module.scss';

/**
 * JSX component that renders the page footer
 */
const Footer: React.FC = ({ children }) => (
  <footer className={style.footer}>
    <div className={style['footer-container']}>
      {children}
      {/* <SocialLinks mode='light' /> */}
    </div>
  </footer>
);

Footer.displayName = 'Footer';

export default Footer;
