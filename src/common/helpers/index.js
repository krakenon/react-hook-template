export function zeroPadding(number, padding = 2) {
  let str = number + '';
  if (str.length < padding) {
    for (let i = 0; i < padding - str.length; i++) {
      str = '0' + str;
    }
  }

  return str;
}
