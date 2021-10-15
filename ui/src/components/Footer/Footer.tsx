import React from 'react';

// Import SocialLinks from 'components/SocialLinks/SocialLinks';

import style from './Footer.module.scss';

/**
 * A JSX component that renders the page footer
 * @component
 * @param props
 * @param props.children - A React node(s) that will be wrapped by the footer.
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
