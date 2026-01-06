// Question no 9
//Initialize array
var colors = ["Red", "Green", "Blue"];
document.write("<b>Initial Array:</b> " + colors + "<br><br>");

// a) Add color at beginning
var addBegin = prompt("Which color do you want to add at beginning?");
colors.unshift(addBegin);
document.write("<b>After adding at beginning:</b> " + colors + "<br><br>");

// b) Add color at end
var addEnd = prompt("Which color do you want to add at end?");
colors.push(addEnd);
document.write("<b>After adding at end:</b> " + colors + "<br><br>");

// c) Add two more colors at beginning
colors.unshift("Purple", "Orange");
document.write("<b>After adding two colors at beginning:</b> " + colors + "<br><br>");

// d) Delete first color
colors.shift();
document.write("<b>After deleting first color:</b> " + colors + "<br><br>");

// e) Delete last color
colors.pop();
document.write("<b>After deleting last color:</b> " + colors + "<br><br>");

// f) Add color at desired index
var indexAdd = +prompt("Enter index number to add color:");
var colorName = prompt("Enter color name:");
colors.splice(indexAdd, 0, colorName);
document.write("<b>After adding color at index:</b> " + colors + "<br><br>");

// g) Delete color(s) from desired index
var indexDelete = +prompt("Enter index number to delete color(s):");
var deleteCount = +prompt("How many colors do you want to delete?");
colors.splice(indexDelete, deleteCount);
document.write("<b>Final Array:</b> " + colors);

// Question no 10 
var student_scores =[325,120,450,556]
console.log(student_scores);
console.log(student_scores.sort());

// Question no 11
var cities =["Karachi","Hyderabad","Lahore","Multan","Islamabad","Sukkar"]
var splice =cities.splice(2,3)
console.log(splice);

// Question no 12
var arr = ["I ","have ", "a " ,"pet " , "dog"]
console.log(arr);

console.log(arr.join(""));

//Question no 13
var furit = []
furit.push("apple")
furit.push("banana")
furit.push("pine apple")
console.log(furit);
console.log(furit.shift())

 