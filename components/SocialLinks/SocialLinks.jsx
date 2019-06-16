// @flow

import React from 'react';

import Twitter from 'static/icons/twitter.svg';
import Github from 'static/icons/github.svg';
import Mail from 'static/icons/mail.svg';

import './SocialLinks.scss';

/**
 * @typedef SocialLinksProps
 * @type {Object}
 * @property {string} style - Flag to render icons in white ('light') or midnight blue ('dark')
 * @memberof SocialLinks
 */
type SocialLinksProps = {
  style?: string,
};

/**
 * JSX component that renders a group of social media links.
 * @namespace SocialLinks
 */
const SocialLinks = ({ style = 'light' }: SocialLinksProps) => (
  <div className='social_icons'>
    <a styleName={`nav-link-${style}`} href='https://twitter.com/crypto_papers'>
      <Twitter />
    </a>
    <a styleName={`nav-link-${style}`} href='https://github.com/crypto-papers/cryptopapers'>
      <Github />
    </a>
    <a styleName={`nav-link-${style}`} href='mailto:cryptopapers@protonmail.com'>
      <Mail />
    </a>
  </div>
);

export default SocialLinks;
