// @flow

/** @module conversions  */

/**
 * Convert a JS date object into a en-US locale string
 * @function dateToLocale
 * @param {Date} date - A JavaScript date object
 * @returns {string} - A locale date string formatted to en-US
 * @memberof conversions
 */
export const dateToLocale = (date: Date) => {
  const options = {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  };

  const localeStr = date.toLocaleDateString('en-US', options);

  return localeStr;
};

/**
 * Converts an object with day, month, year properties into a date string
 * @function concatDate
 * @param {Object} obj - Object with date properties
 * @param {number=} obj.day - Optional day value
 * @param {string=} obj.month - Optional month value
 * @param {number=} obj.year - Optional year value
 * @returns {string}
 * @memberof conversions
 */
export const concatDate = (obj: { day?: number, month?: string, year?: number }) => {
  const day = obj.day ? obj.day : null;
  const month = obj.month ? obj.month : null;
  const year = obj.year ? obj.year : null;

  let date;
  if (day && month && year) {
    date = `${month} ${day}, ${year}`;
  } else if (!day && month && year) {
    date = `${month} ${year}`;
  } else if (!day && !month && year) {
    date = year;
  } else {
    date = 'Unkown';
  }

  return date;
};
