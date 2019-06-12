// @flow

import React from 'react'
import Link from 'next/link'

import { colors, gradients } from '../styles/colors';
import Plume from '../static/plume.svg';

const headerStyle = {
  alignItems: 'center',
  background: colors.darkBlue,
  background: gradients.darkLightBlue,
  display: 'flex',
  justifyContent: 'space-between',
}

const titleStyle = {
  color: colors.white,
}

const plumeStyle = {
  width: '150px',
  padding: '1rem',
}

const Header = () => (
  <div style={ headerStyle }>
    <h1 style={ titleStyle }>
      Cryptopapers.info
    </h1>
    <Plume style={ plumeStyle } />
  </div>
)

export default Header