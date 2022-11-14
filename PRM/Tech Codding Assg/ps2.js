/*
Java Script Candidates -

A student will not be allowed to sit in the exam 
if his/her attendance is less than 75%. 
if he/she has medical causes reduce attendance criteria to 60%. 
Ask the user if he/she has a medical cause or not ( 'Y' or 'N' ) 
and print accordingly. You were given a total no classes and 
total classes attended by the student.

Input Format:
The first line contains integer total_classes and 
the second line contains integer attended_classes and 
the tired line contains string medical cause Y or N.

Output Format:

Print "True" or "False" without quotes.

Sample Input 0:
250
150
N
Sample Output :
False
*/

function checkAtt(total, present, report) {
  console.log(total, present, report);
  let requiredAttendence = (present / total) * 100;

  if (requiredAttendence > 75) {
    console.log("True");
  } else if (requiredAttendence >= 60) {
    if (report === "Y") {
      console.log("True");
    } else {
      console.log("False");
    }
  } else {
    console.log("False");
  }
}
checkAtt(250, 150, "N");
