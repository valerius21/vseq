import range from "lodash.range";

/**
 * https://lodash.com/docs/4.17.15#range with the exception, that the end-number is inclusive.
 * @param {number} start - the number to start on
 * @param {number} end - the number to end on, which is inclusive
 * @param {number} step - the stepsize the sequence is based on
 * @return {number[]} the resulting number sequence as an array
 */
export const seq = (start: number, end?: number, step?: number) => range(start, end ? end + 1 : end, step);
