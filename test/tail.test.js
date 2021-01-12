const assert = require('chai').assert;
const { tail } = require('../tail');


describe('', () => {
  it('typeof is number (1)', () => {

    assert.typeOf(tail([5, 6, 7])[0], "number");
  });
  it('tail is equal', () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it('tail is not equal(1)', () => {
    assert.notDeepEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('tail is not equal(2)', () => {
    assert.notDeepEqual(tail([0]), 0);
  });
  it('tail is not equal(3)', () => {
    assert.notDeepEqual(tail([]), undefined);
  });
});