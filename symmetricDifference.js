function base(arr1, arr2){
  var newArr = arr1.concat(arr2);
  return newArr.filter(function(value, index, array){
    if (array.slice(index + 1).indexOf(index) === -1 && array.slice(0, index).indexOf(value) === -1){
      return value;
    }
  })
}
function removeDupes(arr){
  var result = [];
  arr.forEach(function(value){
    if (result.indexOf(value) < 0){
      result.push(value);
    }
  
  })
  return result;
}
function sym(args)
//incomplete solution
