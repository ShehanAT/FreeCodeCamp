//NEED TO UNDERSTAND HOW THE MATH WAS TRANSLATED 
// BY STEPHAN MAYEUX
function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var range = [];

  for (var x = min; x <= max; x++) {
    range.push(x);
  }

  var a = Math.abs(range[0]);

  for (var i = 1; i < range.length; i++) {//THIS IS WHERE THE LCM OF TEO GIVEN NUMBERS IN CACULATED
    var b = Math.abs(range[i]);
    var c = a;

    while (a && b) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    a = Math.abs(c * range[i] / (a + b));//THIS VALUE WILL BE COMPARED TO THE NEXT NUM IN RANGE IN THE WHILE LOOP
  }//
  return a;
}
//TO FIND LCM OF a AND b
//while (a && b){
// if (a > b){
//    a = a % b;
//}
//   else{
//    b = b % a;  
//    }
//}
