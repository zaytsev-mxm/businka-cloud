import { describe, expect, test } from 'vitest';

import { add } from './add';

describe('add', () => {
  test('correctly add up two numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });

  test('correctly handles NaN', () => {
    expect(add(1, NaN)).toBeNaN();
  });
});
