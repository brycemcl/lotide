const assert = require('chai').assert;
const { middle } = require('../middle');

describe('middle', () => {
  it('equal(1)', () => {
    const input = [1];
    const output = [];
    assert.deepEqual(middle(input), output);
  });
  it('equal(2)', () => {
    const input = [1, 2];
    const output = [];
    assert.deepEqual(middle(input), output);
  });
  it('equal(3)', () => {
    const input = [1, 2, 3];
    const output = [2];
    assert.deepEqual(middle(input), output);
  });
  it('equal(4)', () => {
    const input = [1, 2, 3, 4];
    const output = [2, 3];
    assert.deepEqual(middle(input), output);
  });
  it('equal(5)', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = [3, 4];
    assert.deepEqual(middle(input), output);
  });
  it('not equal(1)', () => {
    const input = [1, 2, 3, 4];
    const output = [2, 4];
    assert.notDeepEqual(middle(input), output);
  });
});