
//Question no 1

var number =prompt("Enter a number")
if(number > 65 && number < 100){
    console.log("UpperCase");
}
else if(number > 92 && number < 122){
console.log("LowerCase")
}
else{
    console.log("Enter a Letter" )
}

//Queation no 2

var num1 =+prompt("enter a first number")
var num2 =+prompt("enter a second number")
if(num1 > num2 ){
    document.write("larger num is " + num1 +"<br>")

}else if(num1 < num2){
    document.write("larger num is " + num2 +"<br>")

}
else(
    document.write("both Number are equal "+"<br>")
)
//Question no 3
var num = +prompt("Enter a Number")
if(num > 0){
    document.write("The given number is Positive" +"<br>" )
}
else if(num < 0){
    document.write("The given number is negitive" +"<br>")
}
else(

    document.write("The given number is equal to zero " +"<br>"));
    // Question no 4

var character =prompt("Enter a character")
var vowel = "a,e,i,o,u";
if(character==vowel){
    console.log("True")

}
else{
    console.log("False")};

    //Question No 5
    var password =+prompt("Enter the password")   
    var correctPassword="Saylani123"
    if(password==correctPassword){
        alert("Correct Password..!")
    }
    else if(password!=correctPassword){
        alert("Incorrect Password...!")
    }
    else(
        alert("Enter a password..")
    )
/// Question no 6
var clinet =+prompt("Enter a time")
var greeting; 
var hour=13
if(hour < 18){
    greeting="Good Morning"
}
else{
    greeting="Good Evening"
}
console.log(greeting)

//Question no 7
var time =+prompt("Enter a time in 24hour(format (0–23))");
if(time >= 0 && time < 12){
    alert("Good Morning")
}
else if (time >= 12 && time < 16){
    alert("Good Afternoon")
}
else if(time >=4 && time < 19 ){
    alert("Good Evening")
}
else if(time >= 7 && time < 24) {
    alert("Good evening")
}
else {
    alert("Invalid Time");
}



