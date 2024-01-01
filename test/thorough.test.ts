import { seq } from '../src';

describe('seq function', () => {
  it('should generate a sequence of numbers from start to end', () => {
    expect(seq(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should generate a sequence of numbers with a step', () => {
    expect(seq(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  it('should generate a sequence of numbers with a negative step', () => {
    expect(seq(10, 1, -1)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  it('should generate a sequence of negative numbers', () => {
    expect(seq(-5, -1)).toEqual([-5, -4, -3, -2, -1]);
  });

  it('should return an empty array if start is greater than end and step is positive', () => {
    expect(seq(5, 1)).toEqual([]);
  });
});