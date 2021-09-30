import { create } from '@storybook/theming';

import brandImage from './static/name-tag.png';

export default create({
  base: 'light',
  brandTitle: 'Cryptopapers',
  brandUrl: 'https://cryptopapers.info/',
  brandImage,

  colorPrimary: 'rgba(5, 55, 130, 1)',
  colorSecondary: 'rgba(29, 136, 224, 1)',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'rgba(224, 224, 224, 1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Hind Vadodara", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'rgba(224, 224, 224, 1)',
  barSelectedColor: 'white',
  barBg: 'rgba(5, 55, 130, 1)',
  

  // Form colors
  inputBg: 'white',
  inputBorder: 'rgba(224, 224, 224, 1)',
  inputTextColor: 'rgba(28, 29, 35, 1)',
  inputBorderRadius: 4,
});