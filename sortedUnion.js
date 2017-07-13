function uniteUnique(arr) {
  var placeholder = [];
  for (var i = 0; i< arguments.length; i++){
    for (var j = 0 ; j < arguments[i].length; j++){
      if (placeholder.indexOf(arguments[i][j]) === -1){
        placeholder.push(arguments[i][j]);
      }
    }
    
  }
  
  return placeholder;
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
