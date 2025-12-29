const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
//1
const filterScore = (students, scoreMorethan) => {
  return students.filter((student) => student.score > scoreMorethan);
};
const studentScoreMoreThan50 = filterScore(students, 50);
//console.log(studentScoreMoreThan50);

//2
const addPercentScore = (students, addPercent) => {
  students.map(
    (student) => (student.score = (student.score * (100 + addPercent)) / 100)
  );
  return students;
};
const addStudentScore10Percent = addPercentScore(studentScoreMoreThan50, 10);
//console.log(addStudentScore10Percent);

//3
const sumStudenScore = (students) => {
  let result =students.reduce((acc, current) => acc += current.score, 0);
//4
  return `Total score is ${result}`
};
const sumOfStudentScoreAdd10Percent = sumStudenScore(addStudentScore10Percent);
console.log(sumOfStudentScoreAdd10Percent);

