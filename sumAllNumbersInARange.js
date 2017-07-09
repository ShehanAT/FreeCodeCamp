
function sumAll(arr) {
   var max = arr.reduce(function(a,b){
     return Math.max(a, b);
   });
  var min = arr.reduce(function(a,b){
    return Math.min(a, b);
  });

  var newArr = [];
  newArr.push(max + min);
 
  
  for (var i = min + 1; i<max; i++){
    newArr.push(i);
  }
  var total = newArr.reduce(function(a,b){
    return a+b;
  });
 
  return total;
}

sumAll([1, 4]);
