// @flow

/** @module customTypes */

/**
 * Data required to populated the featured paper
 * @typedef PaperData
 * @type {Object}
 * @property {Date} added - JavaScript date object for date on which paper uploaded
 * @property {string=} author - Name of paper's author
 * @property {string=} description - Brief paper description
 * @property {string=} excerpt - Brief excerpt of text from a paper
 * @property {Object=} image - Image data (with properties url and alt)
 * @property {Object} pubDate - Publication date info (with properties day, month, and year)
 * @property {string} title - The title of a paper
 * @memberof customTypes
 */
export type PaperData = {
  added: Date,
  author?: string,
  description?: string,
  downloadUrl: string,
  excerpt: string,
  image?: {
    url?: string,
    alt?: string,
  },
  pubDate: {
    day?: number,
    month?: string,
    year?: number,
  },
  title: string,
};
