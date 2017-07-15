//DO NOT PUT ALL THE LOGIC IN A FOR LOOP 
//NOT SIEVE OF ERATHOTHENES 
function sumPrime(num){
	var primes = [];
	for (var i = 2; i <= num; i++){
		if (isPrime(i)){
			primes.push(i);
		}
	}
	return primes.reduce(function(a,b){
		return a + b;
	});
}
	
	function isPrime(num){
		for (var j = 2; j < num; j++){
			if (num % j === 0){
				return false;
			}
		}
		return true;
	}
	
