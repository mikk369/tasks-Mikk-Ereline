const people = [
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

const Upper = people.map(function (item) {
  for (const key in item) {
    const upper = key.toUpperCase();
    // check if it already wasn't uppercase
    if (upper !== key) {
      item[upper] = item[key];
      delete item[key];
    }
  }
  return item;
});
console.log(Upper);
