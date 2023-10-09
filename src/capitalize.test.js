const capitalize = require('./capitalize');

test('Capitalizes a given string', () => {
  expect(capitalize('essen')).toBe('Essen');
})

test('Capitalizes a given string', () => {
  expect(capitalize('house')).toBe('House');
})

test('Capitalizes a given string', () => {
  expect(capitalize('zelt')).toBe('Zelt');
})

test('Ignores special characters and nummbers', () => {
  expect(capitalize('!rain')).toBe('!rain');
})

test('Ignores already capital characters', () => {
  expect(capitalize('Tree')).toBe('Tree');
})

test('Gives back empty string', () => {
  expect(capitalize('')).toBe('');
})