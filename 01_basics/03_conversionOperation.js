let score = 33 
//console.log(score);
//console.log(typeof score);// number...

/*  CONVERSION OF STRING TO NUMBER...*/

let score1 = "33abc"// we can also try this ..."null", undefined ,true and false dono ko try kar skte hai
//console.log(typeof score1);
// do tarah se type nikal sakte hai
//console.log(typeof(score1));

let valueInNumber = Number(score1)
//console.log(typeof valueInNumber);// number
//console.log(valueInNumber)// Nan => Not a Number...

// ***FOR STRING CONVERSION ***

let name ="sanju"
console.log(name)
let convertInNum = Number(name)
console.log(convertInNum)// Nan
console.log(typeof convertInNum)// type => number...

// CONVERSION OF 1 OR 0 TO BOOLEAN LETS CHECK KRTE HAI...

let isLoggedIn = 0 //1
console.log(typeof isLoggedIn)
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//           ***note***
/*
          "33" => 33
          "33abc"=> NaN
          true=>1 : false=>0

          1 => true : 0=> false
          "" => false
          "sanju" => true

*/