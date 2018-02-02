var talkingCalendar = function(date) {
	var fullDate = new Date(date);
	var theMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  	var theDay = fullDate.getDate()
  	if(theDay == 1 || theDay == 21 || theDay == 31){
  		theDay += "st, ";
  	}
  	else if(theDay == 2 || theDay == 22){
  		theDay += "nd, "
  	}
  	else if(theDay == 3 || theDay == 23){
  		theDay += "rd, "
  	}
  	else{
  		theDay += "th, "
  	}
  	return theMonth[fullDate.getMonth()] + " " + theDay + fullDate.getFullYear();
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
