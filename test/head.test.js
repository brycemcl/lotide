const assert = require('chai').assert;
const { head } = require('../head');


describe('head', () => {
  it('head not equal(1)', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it('head not equal(2)', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('head not equal(3)', () => {
    assert.strictEqual(head([0]), 0);
  });
  it('head not equal(4)', () => {
    assert.strictEqual(head([]), undefined);
  });

});