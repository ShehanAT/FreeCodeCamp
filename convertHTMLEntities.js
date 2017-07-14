
function convertHTML(str) {
  // &colon;&rpar;
  var placeholder = str.split("");
  var newStr = '';
  for (var i = 0; i < placeholder.length; i++){
    switch(placeholder[i]){
      case "&":
        newStr += "&amp;";
        break;
      case "<":
        newStr += "&lt;";
        break;
      case ">":
        newStr += "&gt;";
        break;
      case "'":
      newStr +="&apos;";
        break;
      case '"':
      newStr += "&quot;";
        break;
      default:
      newStr += str[i];
        break;
    
  }
 
}
  return newStr;
}
convertHTML("Dolce & Gabbana");
