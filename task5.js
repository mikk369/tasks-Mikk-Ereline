function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const a1 = '';
const a2 = 'tere';
const a3 = 'minu nimi on John';

console.log(a1 === '') //false
console.log(a2 === '')//true
console.log(a3 === '')//true

console.log(capitalizeFirstLetter(a2)); //uppercase
console.log(capitalizeFirstLetter(a3)); //uppercase






