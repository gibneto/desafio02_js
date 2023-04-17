// Exercise 02

alert("Let's check if the students made it to next year!!")

const students = [
  {
    name: 'John',
    gradeOne: 5.5,
    gradeTwo: 7.5,
    gradeThree: 7.5,
  },
  {
    name: 'Mike',
    gradeOne: 2,
    gradeTwo: 4.5,
    gradeThree: 9,
  },
  {
    name: 'Anna',
    gradeOne: 6.5,
    gradeTwo: 10,
    gradeThree: 8,
  },
  {
    name: 'Harvey',
    gradeOne: 4,
    gradeTwo: 3.5,
    gradeThree: 10,
  },
]

function AVG(gradeOne, gradeTwo, gradeThree) {
  return (gradeOne + gradeTwo + gradeThree) / 3
}

function printStudentAVG(student) {
  if(AVG(student.gradeOne, student.gradeTwo, student.gradeThree) >= 7){
    return `The final average grade of the student ${student.name} is ${(AVG(student.gradeOne, student.gradeTwo, student.gradeThree)).toFixed(2)}
    \nCongratz ${student.name}. You're approved!`
  }
  else{
    return `The final average grade of the student ${student.name} is ${(AVG(student.gradeOne, student.gradeTwo, student.gradeThree)).toFixed(2)}
    \nWe're sorry ${student.name}. Unfortunately you didn't made the minimum cut...`
}
}

let finalResults = []

for(let student of students){
  let AVGalert = printStudentAVG(student)
  alert(AVGalert)
}
