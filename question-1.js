const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
//1
const allPeople = [...techupPeople, ...techcoolPeople];
//2
const filterAgeOfPeople = (allPeople, age) => {
  return allPeople.filter((people) => people.age < age);
};

const peopleUnder20 = filterAgeOfPeople(allPeople, 20);
//result
//console.log(allPeople);
console.log(peopleUnder20);
