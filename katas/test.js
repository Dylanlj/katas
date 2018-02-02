var talkingCalendar = function(date) {
  // Your code here
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987 


st 1 21 31
nd 2 22
rd 3 23
th 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 24 25 26 27 28 29 30 


var date1 = new Date("2017/12/02");

console.log(date1.toDateString());

//day 
console.log(date1.getDate());
console.log(date1.getMonth());
console.log(date1.getYear());
