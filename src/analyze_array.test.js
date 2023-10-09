const analyze_string = require('./analyze_array');

test('Analyze an array of 4 numbers', () => {
  expect(analyze_string([1, 2, 3, 4])).toEqual({'average': 2.5, 'length': 4, 'max': 4, 'min': 1});
})

test('Analyze an array of 14 numbers', () => {
  expect(analyze_string([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])).toEqual({'average': 7.5, 'length': 14, 'max': 14, 'min': 1});
})

test('Analyze an array of 10 numbers with some negatives', () => {
  expect(analyze_string([1, 2, 3, 4, -5, 6, 7, 8, 9, -10, 11, 12, 13, -14])).toEqual({'average': 3.357142857142857, 'length': 14, 'max': 13, 'min': -14});
})