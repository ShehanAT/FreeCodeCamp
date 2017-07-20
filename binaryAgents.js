function binaryAgent(str) {
  var placeholder = str.split(" ").map(function(value){// MAP ITERATES THRU ALL STRINGS IN THE PLACEHOLDER ARRAY
    
    return String.fromCharCode(parseInt(value,2));// CONVERT BINARY STRINGS TO ENGLISH, THE 2 TELLS THE COMPUTER THAT THE GIVEN STRING IS IN BINARY 
  }).join("");
  return placeholder;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
