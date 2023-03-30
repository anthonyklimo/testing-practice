const cipher = require('./caeserCipher');

test('aaa shift 1 to bbb', () => {
    expect(cipher('aaa', 2)).toBe('ccc');
});

test('waze shift 10 to bbb', () => {
    expect(cipher('waze', 10)).toBe('gkjo');
});