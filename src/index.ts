/**
 * https://lodash.com/docs/4.17.15#range with the exception, that the end-number is inclusive.
 * @param {number} start - the number to start on
 * @param {number} end - the number to end on, which is inclusive
 * @param {number} step - the stepsize the sequence is based on
 * @return {number[]} the resulting number sequence as an array
 */
export const seq = (start: number, end?: number, step: number = 1): number[] => {
    if (end === undefined) {
        return Array.from({ length: start }, (_, i) => i + 1);
    }

    if ((start > end && step > 0) || (start < end && step < 0)) {
        return [];
    }

    const length = Math.floor((end - start) / step) + 1;
    return Array.from({ length }, (_, i) => start + (i * step));
};