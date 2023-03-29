const cipher = require('./caeserCipher');

test('aaa shift 1 to bbb', () => {
    expect(cipher('aaa', 2)).toBe('ccc');
});