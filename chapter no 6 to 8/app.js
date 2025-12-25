var a = -2
var b = -1
var c = a - b
console.log(3)

var b = 10
var c = 5
var d = --b + ++c - b + c
//  d = 9 + 6 - 9 + 6
//  d = 0
console.log(0)

// --a - --b
var  a = 8
var  b = 6
var c = --a - --b
//  c = 7 - 5 = 2
console.log(2)


// --a - --b ++b
var c = --a - --b + ++b
//  c = 7 - 5 + 5
console.log(7)