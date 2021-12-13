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

// Helper functions
// ---------------------------------------------------------------------------------
function isName(item) {
  return item.name;
}

function getage(item) {
  return item.age;
}

function addScores({ totalage }, age) {
  return {
    totalage: totalage + age,
  };
}

// Calculations
// ---------------------------------------------------------------------------------

const initialInfo = { totalage: 0 };
const ageInfo = persons
  .filter(isName)
  .map(getage)
  .reduce(addScores, initialInfo);

const { totalage } = ageInfo;
const ageTotal = totalage;
console.log("Result:", ageTotal);
