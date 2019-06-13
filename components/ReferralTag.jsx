// @flow

import React from 'react';

import { colors } from '../styles/colors';

import Brave from '../static/icons/brave-logo.svg'

const tagStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
}

const tagTextStyle = {
  color: colors.white,
}

const braveStyle = {
  maxHeight: '50px',
  width: '100px',
}

const ReferralTag = () => (
  <a href='https://brave.com/cry736' style={ tagStyle } target='_blank'>
    <span style={ tagTextStyle}>Supported by:</span>
    <Brave style={ braveStyle } />
  </a>
);

export default ReferralTag;