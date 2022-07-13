import { seq } from '../src';

describe('this is a placeholder test, since most of the funtionality is already tested from the lodash library.', () => {
  it('works', () => {
    expect(seq(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
