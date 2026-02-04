//Question no 1
function date(){
    var newDate =new Date()
    console.log(newDate)
}
date()
//Question no 2
var userName =prompt("Enter your name here") || "user";
var lName = prompt("Enter your last name")
var fullName=userName+lName
function greet(fullName){
    
console.log("Welcome " +fullName) ;

}
greet(userName,lName)

//Question no 3
function sum(a,b){
console.log(a+b)
}
sum(10,5)
// Question no 4
function calculator(num1, num2, operator) {
    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
}

alert(calculator(10, 5, "+"));
//Question no 5
function squares(num){
    console.log(num*num);
    
}
squares(4);