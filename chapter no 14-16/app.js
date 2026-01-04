

// Chapter no 14 to 16

// Question no 1
var petanimals = [];
//short and simple method 
// commonly used

// Question no 2
var countrys = new Array();
// long method
// not commonly used

// Question no 3
var cities = ["Karachi", "Hyderabad", "Sukkar", "Lahore", "Islamabad", "Multan"]
console.log(cities);

// Question no 4

var numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9,]
console.log(numbers[4]);

// Question no 5
var mixarr = ["Iqra", "Karachi", "Bsc", 25]
console.log("My name is " + mixarr[0] + " I live in " + mixarr[1] + "I complete my " + mixarr[2] + "I am " + mixarr[3] + " year old .");

//Question no 6
var findcorrect = ["True", "False"]
console.log("Fish live in water ." + findcorrect[0])
console.log("Cat eat biryani. " + findcorrect[1]);


//Question no 7
var qualification = []
qualification[0] = "SSC"
qualification[1] = "HSC"
qualification[2] = "Bsc"
qualification[3] = "BCom"
qualification[4] = "BS"
qualification[5] = "MS"
qualification[6] = "M.Phil"
qualification[7] = "PHD"
document.write("<h1> Qualifications</h1>" + "<br>")
document.write(
    "<span>" + qualification[0] + "</span>" +"<br>"
)
document.write(
    "<span>" + qualification[1] + "</span>"+"<br>"
)
document.write(
    "<span>" + qualification[2] + "</span>"+"<br>"
)
document.write(
    "<span>" + qualification[3] + "</span>"+"<br>"
)
document.write(
    "<span>" + qualification[4] + "</span>"+"<br>"
)
document.write(
    "<span>" + qualification[5] + "</span>"+"<br>"
)
document.write(
    "<span>" + qualification[6] + "</span>"+"<br>"
)
document.write(
    "<span>" + qualification[7] + "</span>"+"<br>"
)

// Question no 8
var studentName =["Ali","Adam","Yahya"]
var studentScore =[450,350,468]
var totalScore =(600)
var percentage1 =(studentScore[0] / totalScore*100) ;
var percentage2 =(studentScore[1] / totalScore*100) ;
var percentage3 =(studentScore[2] / totalScore*100) ;
document.write("<h1>Score & Percentage of Student </h1>")
document.write(
    " <h2> Score of "+studentName[0]+" is "+studentScore[0]+". Percentage :"+percentage1 +"% </h2>" +"<br>"
)
document.write(
    " <h2> Score of "+studentName[1]+" is "+studentScore[1]+". Percentage :"+percentage2 +"% </h2>" +"<br>"
)
document.write(
    " <h2> Score of "+studentName[2]+" is "+studentScore[2]+". Percentage :"+percentage3 +"% </h2>" +"<br>"
)
