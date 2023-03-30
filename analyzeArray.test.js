const analyzeArray = require('./analyzeArray');

test('attributes of array', () => {
    expect(analyzeArray([3, 2, 1])).toStrictEqual({ average: 2, min: 1, max: 3, length: 3});
});

