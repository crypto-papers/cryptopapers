import React from 'react';

import './ReferralBadge.scss';

import Brave from '_static/icons/brave-logo.svg';

/**
 * JSX component that renders the Brave referral badge
 * @namespace ReferralBadge
 */
const ReferralBadge = () => (
  <a href='https://brave.com/cry736' rel='noopener noreferrer' styleName='badge' target='_blank'>
    <span styleName='badge-text'>Supported by:</span>
    <Brave styleName='brave-logo' />
  </a>
);

export default ReferralBadge;
