const persons = [
  {
    name: "Julia",
    age: 27,
  },
  {
    name: "Martin",
    age: 45,
  },
  {
    name: "Taavi",
    age: 17,
  },
  {
    name: "Emma",
    age: 2,
  },
  {
    name: "Ricky",
    age: 62,
  },
];

const ageLower = persons.filter((age) => age.age < 30);
const boyNames = ["Martin", "Taavi", "Ricky"];
const girlNames = ["Julia", "Emma"];
const boynames = persons
  .filter(function (persons) {
    return persons.name === "boynames";
  })
  .map(function (persons) {
    return persons.boyNames;
  });

const girlnames = persons
  .filter(function (persons) {
    return persons.name === "girlnames";
  })
  .map(function (persons) {
    return persons.girlNames;
  });
console.log(boyNames);
console.log(girlNames);
console.log(ageLower);
