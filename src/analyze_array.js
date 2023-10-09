const analyze_string = array => {
  let min = Infinity;
  let max = -Infinity;
  let length = 0;
  let sum = 0;

  for (const num of array) {
    length += 1;
    min = num < min ? num : min;
    max = num > max ? num : max;
    sum += num;
  }

  return {
    average: sum / length,
    min: min,
    max: max,
    length: length
  };
}

module.exports = analyze_string;