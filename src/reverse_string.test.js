const reverse_string = require('./reverse_string')

test('Reverses a given string', () => {
  expect(reverse_string('Essen')).toBe('nessE');
})

test('Reverses a given long string', () => {
  expect(reverse_string('importance')).toBe('ecnatropmi');
})

test('Reverses a sentence', () => {
  expect(reverse_string('You know how important security is!?!')).toBe('!?!si ytiruces tnatropmi woh wonk uoY');
})

test('Works with numbers', () => {
  expect(reverse_string('1234567890')).toBe('0987654321');
})

test('Gives back empty string', () => {
  expect(reverse_string('')).toBe('');
})