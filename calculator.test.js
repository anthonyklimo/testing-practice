const calculator = require('./calculator');

test('calculator add', () => {
    expect(calculator.add(3, 4)).toBe(7);
});

test('calculator subtract', () => {
    expect(calculator.subtract(4, 3)).toBe(1);
});

test('calculator subtract', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
});

test('calculator subtract', () => {
    expect(calculator.divide(12, 3)).toBe(4);
});