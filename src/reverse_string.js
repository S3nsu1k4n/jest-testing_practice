const reverseString = string => {
  let new_string = '';
  for(let i = 1; i <= string.length; i++){
    new_string += string.substring(string.length - i, string.length - i + 1);
  }
  return new_string;
}

module.exports = reverseString;