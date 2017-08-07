function diffArray(arr1, arr2) {
  var holderArr= [];
  //To add all numbers or string in an array:
  for (var i = 0 ; i < arr1.length; i++ ){
    if (arr2.indexOf(arr1[i]) === -1){
      holderArr.push(arr1[i]);
    }
  }
  for (var i = 0; i < arr2.length ; i ++ ){
    if (arr1.indexOf(arr2[i]) === -1){
      holderArr.push(arr2[i]);
    }
  }
  // Same, same; but different.
  return holderArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// Stephan Mayeux version
function diffArray(arr1, arr2){
  var holderArr = arr1.concat(arr2);
  return holderArr.filter(function(value, index, array){
    if (array.slice(index + 1).indexOf === -1 && array.slice(0, index).indexOf(value) === -1){
     return value;; 
    }
  
  });
  
}
