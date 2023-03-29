const capitalize = require ('./capitalize');

test('anthony capitalizes to Anthony', () => {
    expect(capitalize('anthony')).toBe('Anthony');
});