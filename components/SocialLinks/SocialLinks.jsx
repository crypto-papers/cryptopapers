// @flow

import React from 'react';

import Twitter from '_static/icons/twitter.svg';
import Github from '_static/icons/github.svg';
import Mail from '_static/icons/mail.svg';

import './SocialLinks.scss';

/**
 * @typedef SocialLinksProps
 * @type {Object}
 * @property {string} mode - Flag to render icons in white ('light') or midnight blue ('dark')
 * @memberof SocialLinks
 */
type SocialLinksProps = {
  mode?: string,
};

/**
 * JSX component that renders a group of social media links.
 * @namespace SocialLinks
 */
const SocialLinks = ({ mode = 'light' }: SocialLinksProps) => (
  <div className='social_icons'>
    <a styleName={`nav-link-${mode}`} href='https://twitter.com/crypto_papers'>
      <Twitter />
    </a>
    <a styleName={`nav-link-${mode}`} href='https://github.com/crypto-papers/cryptopapers'>
      <Github />
    </a>
    <a styleName={`nav-link-${mode}`} href='mailto:cryptopapers@protonmail.com'>
      <Mail />
    </a>
  </div>
);

export default SocialLinks;
