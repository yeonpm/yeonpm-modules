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

/**
 * Capitalizes the first letter of a string
 * @param value input string
 * @returns string with first letter capitalized
 */
export const capitalize = (value: string): string => {
  try {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } catch (error) {
    return "";
  }
};

/**
 * Converts a date string to a Date object
 * @param dateStr date string (in the format YYMMDD, YYYYMMDD, YYYYMMDDHHMM, YYYYMMDDHHMMSS)
 * @returns Date object
 */
export const stringToDate = (dateStr: string): Date => {
  try {
    const cleaned = dateStr.replace(/[^0-9]/g, "");
    let year: string, month: string, day: string;
    let hour = "00",
      minute = "00",
      second = "00";

    switch (cleaned.length) {
      case 6: // YYMMDD
        year = "20" + cleaned.substring(0, 2);
        month = cleaned.substring(2, 4);
        day = cleaned.substring(4, 6);
        break;
      case 8: // YYYYMMDD
        year = cleaned.substring(0, 4);
        month = cleaned.substring(4, 6);
        day = cleaned.substring(6, 8);
        break;
      case 12: // YYYYMMDDHHMM
        year = cleaned.substring(0, 4);
        month = cleaned.substring(4, 6);
        day = cleaned.substring(6, 8);
        hour = cleaned.substring(8, 10);
        minute = cleaned.substring(10, 12);
        break;
      case 14: // YYYYMMDDHHMMSS
        year = cleaned.substring(0, 4);
        month = cleaned.substring(4, 6);
        day = cleaned.substring(6, 8);
        hour = cleaned.substring(8, 10);
        minute = cleaned.substring(10, 12);
        second = cleaned.substring(12, 14);
        break;
      default:
        throw new Error("Invalid date string format");
    }

    const date = new Date(
      parseInt(year),
      parseInt(month) - 1, // 월은 0부터 시작
      parseInt(day),
      parseInt(hour),
      parseInt(minute),
      parseInt(second)
    );

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    return date;
  } catch (error) {
    throw new Error("Failed to parse date string");
  }
};

/**
 * Truncates a string if it exceeds the specified length
 * @param value input string
 * @param length maximum length before truncation
 * @returns truncated string with ellipsis if needed
 */
export const truncate = (value: string, length: number): string => {
  try {
    return value.length > length ? value.slice(0, length) + "..." : value;
  } catch (error) {
    return "";
  }
};

/**
 * Converts a date to a relative time string (e.g., "2 hours ago")
 * @param date Date object or timestamp
 * @returns relative time string
 */
export const timeAgo = (date: Date | number): string => {
  try {
    const seconds = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / 1000
    );
    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const value = Math.floor(seconds / secondsInUnit);
      if (value > 0) {
        return `${value} ${unit}${value > 1 ? "s" : ""} ago`;
      }
    }
    return "Just now";
  } catch (error) {
    return "";
  }
};
