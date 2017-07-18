
function dropElements(arr, func) {
  // Drop them elements.
  while(!func(arr[0])){//  ! MEANS FALSE, REMOVE THE THE FIRST OF ARR AS LONG AS THE GIVEN VALUE RETURNS FALSE
    arr.shift();//SHIFT REMOVES THE FIRST ELEMENT OF THE ARRAY 
  }
  return arr;
}
console.log(dropElements([1,2,3], function(n){return n < 3;}));
