// Student Information
const name = "Pranjal Pagar";
const school = "SIES School";
const grade = "Grade 10";
const section = "Section A";
const rollno = "30";
const subjects = ["Math", "Science", "English"];
const marks = [95, 88, 92];

// ASCII Art for Report Card
const reportCard = `
  ___________________________________________________
 /                                                 \\
|                      REPORT CARD                    |
|_____________________________________________________|
| Name: ${name.padEnd(30)} School: ${school.padEnd(30)} |
| Grade: ${grade.padEnd(30)} Section: ${section.padEnd(30)} |
| Roll No: ${rollno.padEnd(30)}                   |
|_____________________________________________________|
| Subject       | Marks      |                        |
|_______________|____________|________________________|
| ${subjects[0].padEnd(10)} | ${marks[0].toString().padEnd(7)} |                        |
| ${subjects[1].padEnd(10)} | ${marks[1].toString().padEnd(7)} |                        |
| ${subjects[2].padEnd(10)} | ${marks[2].toString().padEnd(7)} |                        |
|_______________|____________|________________________|
| Total         | ${marks.reduce((acc, curr) => acc + curr, 0).toString().padEnd(10)} |                        |
|_____________________________________________________|
`;

console.log(reportCard);
