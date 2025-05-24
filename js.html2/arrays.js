// Shopping cart task
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat')
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar')
let honeyIndex = shoppingCart.indexOf('Honey')
if (honeyIndex !== -1) shoppingCart.splice(honeyIndex, 1)
let teaIndex = shoppingCart.indexOf('Tea')
if (teaIndex !== -1) shoppingCart[teaIndex] = 'Green Tea'
console.log(shoppingCart)

// Countries task
const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark',
  'Ethiopia', 'Finland', 'Germany', 'Hungary',
  'Ireland', 'Japan', 'Kenya'
]
countries.reverse()
let index = countries.indexOf('Canada')
if (index !== -1) countries.splice(index, 2, 'Azerbaijan')
console.log(countries)

// fullStack
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// IT Companies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(-3))
let mid = Math.floor(itCompanies.length / 2)
console.log(itCompanies.length % 2 === 0 ? itCompanies.slice(mid - 1, mid + 1) : [itCompanies[mid]])
console.log([...itCompanies].sort())

itCompanies.forEach(company => console.log(company.toUpperCase()))

console.log(itCompanies.includes("Google") ? "Google" : "Company not found")

let filtered = []
for (let company of itCompanies) {
  let count = 0
  for (let ch of company.toLowerCase()) {
    if (ch === 'o') count++
  }
  if (count <= 1) filtered.push(company)
}
console.log(filtered)

// Product prices sum and avg
const products = [
  { id: 1, title: "Smartphone", price: 799.99 },
  { id: 2, title: "Laptop", price: 1299.99 },
  { id: 3, title: "Coffee Maker", price: 99.99 },
  { id: 4, title: "Headphones", price: 199.99 },
  { id: 5, title: "Smart TV", price: 699.99 }
]
let total = 0
for (let product of products) {
  total += product.price
}
let avg = total / products.length
console.log("Cem:", total.toFixed(2))
console.log("Orta:", avg.toFixed(2))
