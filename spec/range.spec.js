const range = require('../range');

describe('{unit}: Testing inRange', () => {

  it('should return true if in range', () => {
    expect(range.inRange({ number: 5, low: 1, high: 10 })).toEqual(true);
  })

  it('should return false if in range', () => {
    expect(range.inRange({ number: 1, low: 5, high: 10 })).toEqual(false);
  })

})