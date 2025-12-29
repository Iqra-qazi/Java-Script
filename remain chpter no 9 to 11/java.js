//question no 5
var a = 4
if(++a === 5){
    alert("given condition for variable a is true")
    console.log(a)
}

var b = 13
if(b++ == 14){
    alert("given condition for variable b is true")

}

// Question no 6

   var sheet = "Student Mark Sheet";
 console.log(sheet)
 document.write("<h1 style='color:#DDDACE;font-family:Serif;font-style:italic;  padding-top:50px;'>" + sheet + " 2025-2026 </h1><br><br>");
  var sub1 = +prompt("Enter marks of Subject 1");
  var sub2 = +prompt("Enter marks of Subject 2");
  var sub3 = +prompt("Enter marks of Subject 3");

  var totalMarks = 300;
  var obtainedMarks = sub1 + sub2 + sub3;

  var percentage = (obtainedMarks / totalMarks) * 100;

  var grade, remarks;

  if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
  } 
  else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
  } 
  else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
  } 
  else {
    grade = "Fail";
    remarks = "Sorry";
  }

  document.write("<h2 style='font-style:italic; text-align:center;'>Result</h2>");
  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Marks Obtained: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
  document.write("Grade: " + grade + "<br>");
  document.write("Remarks: " + remarks +"<br>");

  //question no 7
  var secretNum = 5
  var guessNum =+prompt("Guess the secret number 1 to 10");
  if(guessNum==secretNum){
    alert("Bingo! Correct Answer")
  }else if(guessNum + 1 === secretNum){
    alert("Close enough to the correct answer")
  }else("Try again");

  //question No 8
  var  num =+prompt("Enter a Number")
  if(num % 3 ===0){
    alert("Number is divisible by 3")
  }else
  alert("Number not divisible by 3");

  //question no 9
  var num =+prompt("enter a number")
  if(num % 2===0){
    alert("even number")
  }
  else
    alert("odd number");

  //question no 10
  var temperture = +prompt("Enter a temperture")
  if(temperture > 40){
    document.write("It is too Hot outside")
  }else if(temperture > 30)
  document.write("The weather is Today Normal")
    else if(temperture > 20)
        document.write("Today's weather is Cool")
    
    else if(temperture >10)
        document.write("OMG!Today weather is so Cool");

    //question no 11
    // var firstNum =+prompt("Enter your first number")
    // var secondNum =+prompt("Enter your second number")
    // var opertor =+prompt("enter opertion +,-,*,/,%")
    // if(opertor===+){
    // =firstNum+secondNum
    // }