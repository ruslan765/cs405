function findDivisors(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) console.log(i)
  }
}
findDivisors(20)

function countDivisors(num) {
  let count = 0
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++
  }
  console.log("Bolenlerin sayi:", count)
}
countDivisors(20)

function powerNum(base, exp) {
  return Math.pow(base, exp)
}
let base = Number(prompt("Ededi daxil edin"))
let exp = Number(prompt("Quvveti daxil edin"))
console.log("Netice:", powerNum(base, exp))

function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}
for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) console.log(i)
}

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('')
  return str === reversed ? "Polindromdur" : "Polindrom deyil"
}
console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"))
