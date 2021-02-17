// @flow

/** @module customTypes */

/**
 * Data on an individual asset
 * @typedef AssetData
 * @type {Object}
 * @property {string} id - Unique identifier for the asset
 * @property {string=} logo - Filename of the asset's logo
 * @property {string} name - The name of the asset
 * @property {string} ticker - The trading ticker for the asset
 * @property {string} createAt - An ISO date string for the item's creation date
 * @memberof customTypes
 */
export type AssetData = {
  id: string,
  logo?: string,
  name: string,
  ticker: string,
  createAt: string,
};

/**
 * Data on a featured paper entry
 * @typedef FeatureData
 * @type {Object}
 * @property {string} id - Unique identifier for the feature entry
 * @property {string} paper - Unique identifier for the featured paper
 * @property {boolean} promoted - Is the feature a promoted item
 * @property {string=} sponsor - If promoted, the name of the sponsor
 * @property {string} createAt - An ISO date string for the item's creation date
 * @memberof customTypes
 */
export type FeatureData = {
  id: string,
  paper: string,
  promoted: boolean,
  sponsor?: string,
  createAt: string,
};

/**
 * Data on an uploaded PDF file
 * @typedef FileData
 * @type {Object}
 * @property {string} id - Unique identifier for the file
 * @property {string=} coverImage - Filename of the paper's cover image
 * @property {string} filename - Name of the file
 * @property {boolean=} latest - Is this file the most recent in a series of versions
 * @property {number=} pageNum - Number of pages in the file
 * @property {string=} pubDate - An ISO date string for the file's date of publication
 * @property {string=} source - Source url from which the file was obtained
 * @property {string=} version - Version of the paper
 * @property {string} createAt - An ISO date string for the item's creation date
 * @memberof customTypes
 */
export type FileData = {
  id: string,
  coverImage?: string,
  filename: string,
  latest?: boolean,
  pageNum?: number,
  pubDate?: string,
  source?: string,
  version?: string,
  createAt: string,
};

/**
 * Data on an individual paper
 * @typedef PaperData
 * @type {Object}
 * @property {string} id - Unique identifier for the paper
 * @property {string=} description - Brief paper description
 * @property {string=} excerpt - Brief excerpt of text from a paper
 * @property {string=} latestVersion - Unique identifier for the file which is the latest version of the paper
 * @property {number=} prettyId - A serialized identifier for the paper
 * @property {string=} subTitle - An optional secondary title
 * @property {string} title - The title of a paper
 * @property {string} createAt - An ISO date string for the item's creation date
 * @memberof customTypes
 */
export type PaperData = {
  id: string,
  description?: string,
  excerpt?: string,
  latestVersion?: string,
  prettyId?: number,
  subTitle?: string,
  title: string,
  createAt: string,
};
