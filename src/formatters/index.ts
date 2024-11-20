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
