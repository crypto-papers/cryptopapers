/** @module navLinks */

/**
 * Title of and link to a page.
 * @typedef NavItem
 * @type {object}
 * @property {string} title - Page title
 * @property {string} href - Page url
 * @memberof navLinks
 */
export type NavItem = {
  title: string,
  href: string,
};

/**
 * Returns a list of pages (expressed as type NavItem).
 * @function pullOffPages
 * @param {Object} obj - The list of all available pages (expressed as type NavItem)
 * @param {string[]} rest - A list of strings to be checked agains obj's keys
 * @returns {NavItem[]} - A list of pages
 * @memberof navLinks
 */
const pullOffPages = (obj: { [key: string]: NavItem }, ...rest: Array<string>) => {
  const list = [];
  const keys = Object.keys(obj);

  rest.forEach(item => {
    if (keys.includes(item)) {
      list.push(obj[item]);
    }
  });

  return list;
};

/**
 * List of pages available to add to nav menu.
 * @constant {Object} pageList
 * @default
 * @memberof navLinks
 */
const pageList = {
  about: { title: 'About', href: '/about' },
  contrib: { title: 'Contribute', href: '/contribute' },
  home: { title: 'Home', href: '/' },
  resources: { title: 'Resources', href: '/' },
};

// List of pages selected for navigation
export const navLinks = pullOffPages(pageList, 'home', 'about', 'contrib');
