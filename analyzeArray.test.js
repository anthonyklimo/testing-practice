const analyzeArray = require('./analyzeArray');

test('attributes of array', () => {
    expect(analyzeArray([3, 2, 1])).toStrictEqual({ average: 2, min: 1, max: 3, length: 3});
});

test('attributes of array', () => {
    expect(analyzeArray([-3, 20, 13, -4])).toStrictEqual({ average: 6.5, min: -4, max: 20, length: 4});
});

