function translatePigLatin(str) {
  var arr = str.split("");
  var vowelRegex = /[aeiou]/;
  var tempArr = '';
  if (vowelRegex.test(arr[0])){
    arr = arr.join("") + "way";
  }
  if (vowelRegex.test(arr[0]) != true){
    if (vowelRegex.test(arr[1]) != true){
      arr = arr.join("");
      tempArr = arr.slice(0,2);
      
      arr = arr.slice(2);
      arr = arr + tempArr + "ay";
    }
    else{
	tempArr = arr[0];
	arr = arr.join("");
    arr = arr.slice(1);
	arr = arr + tempArr + "ay";
    }

}

  return arr;
}

translatePigLatin("glove");
