
const random_number = Math.floor(Math.random() * 100);
console.log(random_number);


const HighestNumber = [39, 69, 96, 93, 63];
console.log(Math.max(...HighestNumber));

const LowestNumber = [39, 69, 96, 93, 63];
console.log(Math.min(...LowestNumber))

const EvenNumbers = [63, 6, 96, 93, 3];
const filtered = EvenNumbers.filter(function (array) {  //Viimast punkti mina tööle ei saanud .
    return (array % 2 === 0);
});
console.log(filtered)