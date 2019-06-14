// @flow

import React from 'react';

import './ReferralTag.scss';

import Brave from 'static/icons/brave-logo.svg';

const ReferralTag = () => (
  <a href='https://brave.com/cry736' styleName='tag' target='_blank'>
    <span styleName='tag-text'>Supported by:</span>
    <Brave styleName='brave-logo' />
  </a>
);

export default ReferralTag;
