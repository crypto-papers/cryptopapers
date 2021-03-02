/** @module conversions  */

/**
 * Convert a JS date object into an en-US locale string
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
 * Convert an ISO date string into a JS date object
 * @function isoToDateObj
 * @param {string} date - An ISO date string
 * @returns {Date} - A JavaScript date object
 * @memberof conversions
 */
export const isoToDateObj = (date: string) => {
  const dateObj = new Date(date);

  return dateObj;
};

/**
 * Convert an ISO date string into an en-US locale string
 * @function isoToLocale
 * @param {string} date - An ISO date string
 * @returns {string} - A locale date string formatted to en-US
 * @memberof conversions
 */
export const isoToLocale = (date: string) => {
  const dateObj = isoToDateObj(date);
  const localeStr = dateToLocale(dateObj);

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
  const day = obj && obj.day ? obj.day : null;
  const month = obj && obj.month ? obj.month : null;
  const year = obj && obj.year ? obj.year : null;

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
