let mark = prompt("Enter student mark (between 0 and 100): ");

if (mark > 79) {
  console.log("Grade: A");
} else if (mark >= 60 && mark <= 79) {
  console.log("Grade: B");
} else if (mark >= 50 && mark <= 59) {
  console.log("Grade: C");
} else if (mark >= 40 && mark <= 49) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}
In this program, we use the prompt() function to display a message to the user and get their input for the student's mark. Then, we use a series of if and else if statements to check the value of mark and output the corresponding grade using the console.log() function.

Note that we are using the >= and <= operators to check if mark falls within certain ranges. For example, mark >= 60 && mark <= 79 checks if mark is greater than or equal to 60 and less than or equal to 79.





