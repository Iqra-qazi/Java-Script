
//Question no 1
var fName =prompt("Enter your sweet name")
var cityName=prompt("Enter your city name")
console.log(fName );
console.log(cityName)
var citykara = "Karachi"

if(cityName==citykara){
console.log("Welcome To City Of Light...")

}else{
    console.log("Welcome")
}

if (cityName == citykara){
  document.write("<h1 style=color:red;font-family:Georgia;font-style: italic;padding-top:10px;>" +" Welcome To City Of Light..."+"</h1>" )
} else {
  document.write("<h1 style=color:green; font-family:Georgia;font-style: italic;padding-top:10px>" +"Welcome"+"</h1> ")
}
//question no 2
 var gender = prompt("Enter your Gender")
 var m_gender="Male"
 var f_gender="Female"

if(gender==m_gender){
     console.log("Good Morning Sir...!")
 }
else{
   console.log("Good Morning Ma'am...!")
}
if(gender==m_gender){
    document.write("<p style='color:blue;'>"+  "Good Morning Sir...! " + "</p>" )
 }
else{
   document.write("<p style='color:pink;'>" + "Good Morning Ma'am...!"+"</p> <br> ")
 }
// //question no 3
var color =prompt("Enter the traffic signal color")
 if(color=="red"){
    document.write("<p style='color:red;'>"+"Must Stop "+"</p> <br> ")
 }
 else if(color=="yellow"){
    console.log("<p style='color:yellow;'>"+"Ready To Move"+"</p> <br> ")
     document.write("<p style='color:yellow;'>"+"Ready To Move"+"</p> <br> ")
 }
 else if(color=="green")
 { console.log("Move Now")
  document.write("<p style='color:green;'>"+"MOve Now"+"</p> <br> ")

}else {
    document.write("Invalid Color"); }
// Question no 4
 var fuel = prompt("Enter your remaining fuel in ilters")
if(fuel<2.5){
     alert("Please refill the fuel in your car")}

     // Question no 5
     var a= 4;
     if(++a==5){alert("given condition for variable a is true")}
