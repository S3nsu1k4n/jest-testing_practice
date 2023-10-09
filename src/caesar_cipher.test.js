const caesar_cipher = require('./caesar_cipher');

test('returns the string from the example', () => {
  expect(caesar_cipher('What a string!', 5)).toBe('Bmfy f xywnsl!');
})

test('not shift special character', () => {
  expect(caesar_cipher("oh! Those dogs! They're so big!!", 5)).toBe("tm! Ymtxj itlx! Ymjd'wj xt gnl!!");
})

test('not shift numbers', () => {
  expect(caesar_cipher('I got 5 Red Flowers', 10)).toBe('S qyd 5 Bon Pvygobc');
})

test('returns original', () => {
  expect(caesar_cipher('Nice weather', 0)).toBe('Nice weather');
})

test('keep same case', () => {
  expect(caesar_cipher('I got Red FlowerS', 3)).toBe('L jrw Uhg IorzhuV');
})

test('high shift number', () => {
  expect(caesar_cipher('Workbook', 929348)).toBe('Asvofsso');
})

test('negative numbers', () => {
  expect(caesar_cipher('Nice weather', -8)).toBe('Fauw owslzwj');
})