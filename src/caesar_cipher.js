const caesar_cipher = (string, shift_factor) => {
  shift_factor = shift_factor % 26;
  shift_factor = shift_factor >= 0 ? shift_factor : shift_factor + 26;
  console.log(shift_factor);
  let result = '';
  for (const char of string) {
    let char_int = char.charCodeAt(0);

    if (char_int >= 97 && char_int <= 122) {
      if (char_int + shift_factor < 97){
        result += String.fromCharCode(123 - (char_int + shift_factor - 97));
      } else if (char_int + shift_factor > 122) {
        result += String.fromCharCode(96 + (char_int + shift_factor - 122));
      } else {
        result += String.fromCharCode(char_int + shift_factor);
      }
    } else if (char_int >= 65 && char_int <= 90) {
      if (char_int + shift_factor < 65){
        result += String.fromCharCode(91 - (char_int + shift_factor - 65));
      } else if (char_int + shift_factor > 90) {
        result += String.fromCharCode(64 + (char_int + shift_factor - 90));
      } else {
        result += String.fromCharCode(char_int + shift_factor);
      }
    } else {
      result += char;
    }

  }
  return result;
}

module.exports = caesar_cipher;