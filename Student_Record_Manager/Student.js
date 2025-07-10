// Objective:
// Create a list of student objects

// Print each student’s details

// Add a new property like "pass/fail" based on marks

let students = [
  {
    name: "subh",
    marks: 90,
  },
  {
    name: "sourav",
    marks: 44,
  },
];

students.forEach((student)=>{
    student.status=student.marks >=50? "pass":"fail";
})

students.forEach((student)=>{
    console.log(`Name:${student.name} scored ${student.marks}-${student.status} `)
})