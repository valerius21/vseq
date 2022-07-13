import range from "lodash.range";

/**
 * https://lodash.com/docs/4.17.15#range with the exception, that the end-number is inclusive.
 */
export const seq = (start: number, end?: number, step?: number) => range(start, end ? end + 1 : end, step);
