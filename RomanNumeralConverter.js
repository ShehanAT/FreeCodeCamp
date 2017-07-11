function romanConverter(num){
  var roman = "";
  var romanNumerals = ['M','CM','DC','D','CD','C','XC','LX','L','XL','X','IX','VI','V','IV','I'];
  var numbers = [1000, 900, 600, 500, 400, 100, 90, 60, 50, 40, 10, 6, 5, 4, 1];
  for (var i = 0; i < numbers[i]; i++){
    while (num >= numbers[i]){
      roman = roman + romanNumerals[i];
      num = num - numbers[i];
    
    }
  
  }
  return roman;

}
