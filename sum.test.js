const sum = require('./sum');

test('ad 4+5 equal to 7', () => {
    expect(sum(4,5)).toBe(7);
})