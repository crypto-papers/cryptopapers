/** @module storybook */

/**
 * Provides a set of CSS properties to configure background for storybook component
 * @function setBackground
 * @param {string[]=} rest - Flags to configure background - accepts values 'dark' & 'center'
 * @returns {Object} - A list of CSS properties
 * @memberof storybook
 */
export const setBackground = (...rest: Array<string>) => {
  // Set background color
  let backgroundColor = '#ffffff';
  if (rest.includes('dark')) {
    backgroundColor = '#053782';
  }

  // Create configuration option objects
  const basicBackground = {
    backgroundColor,
    width: '100vw',
    height: '100vh',
    padding: '20px',
  };

  const centeredBackground = {
    alignItems: 'center',
    backgroundColor,
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    padding: '20px',
    width: '100vw',
  };

  // Determine which configuration to us
  let selection;
  if (rest.includes('center')) {
    selection = centeredBackground;
  } else {
    selection = basicBackground;
  }

  return selection;
};
