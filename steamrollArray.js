
function steamrollArray(arr){
	return arr.reduce(function(a, b){
		if (Array.isArray(b)){
			return steamrollArray(a.concat(b));
}
		else{
			return a.concat(b);
}
},[]);
}
steamrollArray([1, [2], [3, [[4]]]]);

