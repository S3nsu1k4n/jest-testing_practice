const calculator = require('./calculator')

test('Adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
})

test('Adds two big numbers', () => {
  expect(calculator.add(83129, 348132)).toBe(431261);
})

test('Adds negative numbers', () => {
  expect(calculator.add(10, -20)).toBe(-10);
})

test('Subtract two numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
})

test('Subtract negative numbers', () => {
  expect(calculator.subtract(5, -5)).toBe(10);
})

test('Subtract negative numbers', () => {
  expect(calculator.subtract(-5, -5)).toBe(0);
})

test('Divide two numbers', () => {
  expect(calculator.divide(5, 5)).toBe(1);
})

test('Divide negative numbers', () => {
  expect(calculator.divide(-5, 10)).toBe(-0.5);
})

test('Divide 0', () => {
  expect(calculator.divide(0, 2)).toBe(0);
})

test('Divide a number by 0', () => {
  expect(calculator.divide(23, 0)).toBe(Infinity);
})

test('Divide a 0 by 0', () => {
  expect(calculator.divide(0, 0)).toBe(NaN);
})

test('Multiply two numbers', () => {
  expect(calculator.multiply(15, 3)).toBe(45);
})

test('Multiply negative numbers', () => {
  expect(calculator.multiply(-2, 3)).toBe(-6);
})

test('Multiply negative numbers', () => {
  expect(calculator.multiply(-21, -3)).toBe(63);
})

test('Multiply with 0 numbers', () => {
  expect(calculator.multiply(12983, 0)).toBe(0);
})

test('Multiply with float numbers', () => {
  expect(calculator.multiply(0.125, 8)).toBe(1);
})