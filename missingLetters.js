function fearNotLetter(str) {
  var word = str;
  var counter = 0;
  for (var i = 0; i<word.length; i++){
    if (word.charCodeAt((i) + 1) - word.charCodeAt(i) == 1){
      
    }
    if (word.charCodeAt(i + 1) - word.charCodeAt(i) == 2){
      counter += 1;
      return String.fromCharCode(word.charCodeAt(i) + 1);
    }
  }
	if (counter == 0){
		console.log("undefined");
}
}

fearNotLetter("abce");
