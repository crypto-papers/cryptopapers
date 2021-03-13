import React from 'react';

import style from './ReferralBadge.module.scss';

import Brave from 'static/icons/brave-logo.svg';

/**
 * JSX component that renders the Brave referral badge
 * @namespace ReferralBadge
 */
const ReferralBadge = () => (
  <a href='https://brave.com/cry736' rel='noopener noreferrer' classeName={style.badge} target='_blank'>
    <span classeName={style['badge-text']}>Supported by:</span>
    <Brave classeName={style['brave-logo']} />
  </a>
);

export default ReferralBadge;
