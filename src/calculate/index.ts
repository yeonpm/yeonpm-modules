/**
 * Sum all numbers
 * @param args - Numbers to sum
 * @returns Sum of all numbers
 */
export const sum = (...args: number[]) =>
  args.reduce((acc, curr) => acc + curr, 0);
