function upperStr(str) {
  return str.toUpperCase()
}
console.log(upperStr("salam dunya"))

function convert(str) {
  let result = ""
  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase()
    } else {
      result += char.toUpperCase()
    }
  }
  return result
}
console.log(convert("saLamNecesen"))
