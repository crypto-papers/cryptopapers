// @flow

import React from 'react';

import Twitter from 'static/icons/twitter.svg';
import Github from 'static/icons/github.svg';
import Mail from 'static/icons/mail.svg';

import './SocialLinks.scss';

const SocialLinks = () => (
  <div className='social_icons'>
    <a styleName='nav-link' href='https://twitter.com/crypto_papers'>
      <Twitter />
    </a>
    <a styleName='nav-link' href='https://github.com/crypto-papers/cryptopapers'>
      <Github />
    </a>
    <a styleName='nav-link' href='mailto:cryptopapers@protonmail.com'>
      <Mail />
    </a>
  </div>
);

export default SocialLinks;
