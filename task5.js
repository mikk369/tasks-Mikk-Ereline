function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const a1 = ' " '
const b2 = 'tere'
const c3 = 'minu nimi on john'

console.log(a1)
console.log(b2)
console.log(c3)

console.log(a1 , b2  === "")
console.log(c3 , "" === "")

console.log(capitalizeFirstLetter(b2)); //uppercase
console.log(capitalizeFirstLetter(c3)); //uppercase
