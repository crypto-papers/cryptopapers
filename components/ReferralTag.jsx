// @flow

import React from 'react';

import Brave from '../static/icons/brave_partnership.svg'

const ReferralTag = () => (
  <a className='brave_link' href='https://brave.com/' target='_blank'>
    <p className='brave_text'>Supported by:</p> <Brave />
  </a>
);

export default ReferralTag;