function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()){
    console.log(after[0]);
    var newStr = after[0].toUpperCase();
    newStr = newStr + after.slice(1);
    str = str.replace(before, newStr);
  }
  else{
    str = str.replace(before, after);
  }
  
  return str;
}

myReplace("His name is Tom", "Tom", "john");
