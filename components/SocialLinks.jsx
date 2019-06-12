// @flow

import React from 'react';

import Twitter from '../static/icons/twitter.svg'
import Github from '../static/icons/github.svg'
import Mail from '../static/icons/mail.svg'

const SocialLinks = () => (
  <div className='social_icons'>
    <a className='twitter_link' href='https://twitter.com/crypto_papers' target='_blank'>
      <Twitter />
    </a>
    <a className='github_link' href='https://github.com/mrewers/Cryptopapers' target='_blank'>
      <Github />
    </a>
    <a className='mail_link' href='mailto:cryptopapers@protonmail.com'>
      <Mail />
    </a>
  </div>
)

export default SocialLinks