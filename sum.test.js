const sum = require('./sum');

test('ad 2+5 equal to 7', () => {
    expect(sum(2,5)).toBe(7);
})