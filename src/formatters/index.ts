/**
 * A function that adds commas every three digits when a number or string is input
 * @param value number or string
 * @returns string with commas
 */
export const commas = (value: number | string) => {
  try {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (error) {
    return "";
  }
};

/**
 * Formats a date into YYYY-MM-DD format
 * @param date Date object or timestamp
 * @param separator separator character between date parts (default: '-')
 * @returns formatted date string in YYYY-MM-DD format
 */
export const dateForm = (
  date: Date | number,
  separator: string = "-"
): string => {
  try {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}${separator}${month}${separator}${day}`;
  } catch (error) {
    return "";
  }
};

/**
 * Formats time into HH:mm or HH:mm:ss format
 * @param date Date object or timestamp
 * @param visibleSecond if true, seconds will be included in the output
 * @returns formatted time string in HH:mm or HH:mm:ss format
 */
export const timeForm = (
  date: Date | number,
  visibleSecond: boolean = false
): string => {
  try {
    const d = new Date(date);
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    if (!visibleSecond) {
      return `${hours}:${minutes}`;
    }

    const seconds = String(d.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  } catch (error) {
    return "";
  }
};

/**
 * Formats a date into YYYY-MM-DD HH:mm format
 * @param date Date object or timestamp
 * @returns formatted date string in YYYY-MM-DD HH:mm format
 */
export const dateTimeForm = (
  date: Date | number,
  separator: string | undefined = undefined
): string => {
  return `${dateForm(date, separator)} ${timeForm(date)}`;
};
