function truthCheck(collection, pre){
  for (var i = 0 ; i < collection.length ; i++){
    if (! collection[i][pre]){//IF ANY SUB ARRAY IN COLLECTION HAS A FALSE PRE PROPERTY RETURN FALSE
      return false;
    }
}
  for (var i = 0 ; i < collection.length ; i++){
    while (collection[i][pre]){//WHILE ANY SUB ARRAY IN COLLECTION HAS A TRUE PRE PROTERTY RETURN TRUE
      return true;
    }
  }
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


// STEPHAN MAYEUX SOLUTION 
function truthCheck(collection, pre){
  return collection.every(function(obj){
    return obj[pre];
  })
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
