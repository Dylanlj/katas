var conditionalSum = function(values, condition) {
	var evenNumbers = 0 ;
	var oddNumbers = 0 ;
  	for(var i = 0; i < values.length; i++){
     if (values[i] % 2 == 0){
  			evenNumbers += values[i]; 
  		}
  		else if(values[i] % 2 == 1){
  			oddNumbers += values[i]; 
  		}      
  	}
  	if(condition == "even"){
  		return evenNumbers;
  	}
  	else if(condition == "odd"){
  		return oddNumbers
  	}
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));