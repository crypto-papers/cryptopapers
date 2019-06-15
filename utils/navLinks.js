// @flow

/**
 * @typedef NavItem
 * @type {object}
 * @property {string} title - Page title
 * @property {string} href - Page url
 */
export type NavItem = {
  title: string,
  href: string,
};

/**
 * Returns a list of pages (of type NavItem)
 * @param {NavItem[]} obj - The list of all available pages
 * @param {...string} rest - A list of strings to be checked agains obj's keys
 * @returns {array} - A list of pages
 */
const pullOffPages = (obj, ...rest) => {
  const list = [];
  const keys = Object.keys(obj);

  rest.forEach(item => {
    if (keys.includes(item)) {
      list.push(obj[item]);
    }
  });

  return list;
};

// List of available pages
const pageList = {
  about: { title: 'About', href: '/about' },
  contrib: { title: 'Contribute', href: '/contribute' },
  home: { title: 'Home', href: '/' },
  resources: { title: 'Resources', href: '/' },
};

// Lost of pages selected for navigation
export const navLinks = pullOffPages(pageList, 'home', 'about', 'contrib');
