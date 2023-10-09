const capitalize = string => {
  const first_char_int = string.charCodeAt(0); //97 - 122
  if (first_char_int >= 97 && first_char_int <= 122) {
    return String.fromCharCode(first_char_int - 32) + string.substring(1);
  }else {
    return string;
  }
}

module.exports = capitalize;