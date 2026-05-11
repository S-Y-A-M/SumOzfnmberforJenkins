const sum = require('./sum');

test('ad 8+5 equal to 7', () => {
    expect(sum(8,5)).toBe(7);
})