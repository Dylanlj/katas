var repeatNumbers = function(data) {
	var repeated = [];
	for(var i = 0; i < data.length; i++){
		if(i>0){
			repeated += ", ";	
				}
		for(var p = 0; p < data[i][1]; p++) {
			repeated += data[i][0];
		}		
	}
	return repeated;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));