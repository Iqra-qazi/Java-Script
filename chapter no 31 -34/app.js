// Question no 1
var date = new Date ()
document.write(date +"<br>")

//Question no 2
var date = new Date()
var newdate =date.toString()
var month =newdate.slice(4,7)
console.log(month);

if(month==="Jan"){
    document.write(month+"uray" +"<br>")
}else(
    console.log
    (month)
)
// Question no 3
var date = new Date()
var day = date.toString()
var sun = day.slice(0,3)
document.write("Today is " + sun +"day"+"<br>");
// Question no 4
var date = new Date()
var day = date.toString();
var newday = day.slice(0,3)
console.log(newday);

if(newday == "Sun"){
    alert("It's Fun Day")
}else if (day == "Sat"){
      alert("It's Fun Day")
}else(
    document.write("Its Working day"+"<br>")
)
// Question no 5
var date = new Date()
if(date <= 15){
    alert("First Fifteen days of the month")
}else(
    alert("Last Fifteen days of the month ")
)
//Question no 6
var date = new Date ()
document.write(date +"<br>")
var militime = date.getTime()
var newdate = date.getDate()
console.log(newdate);

document.write(newdate+militime+"<br>")
//Question no 7 
var date = new Date ()
var hour = date.getHours()
if(hour=="a.m"){
    alert("Its a.m")
}else(
    alert("Its p.m")
)
//Question no 8
var date = new Date ("12-31-25")
console.log(date)
// Question no 9
var date = new Date("2 18 26")
console.log(date);

document.write("24 days have passed since 1st Ramadan ,2026"+"<br>")