alert("Welcome To My World....!");
var fName = prompt("Enter your First Name")
var lName = prompt('Enter your last Name')
// var age   = prompt("Enter your age in Number")
// var country=prompt("Enter your Country ")
// var education=prompt("Enter your Education")
var fullName = fName +"." +  lName
console.log("Welcome Ms " + fullName)
var welCome =("We are truly delighted to have you here. Your presence means a lot to us, <br>"+"and we are excited to begin this journey together. <br>" + "This is a place where learning, growth, and creativity are encouraged. <br> " +"Feel free to explore, ask questions, and share your ideas without hesitation. <br>" +" We hope your time with us will be meaningful, productive, <br>"+"and full of positive experiences.\n Once again, welcome, and we wish you great success ahead.")

document.write("<h1 class='headerheading text-center mt-5'>" + "WelCome To Ms" +". " +  fullName + "...!" + "</h1>")
document.write("<div class='para d-flex justify-content-center'>"+"<h3 class='box text-center p-5 '>" + welCome + "</h3>"+"</div>")
