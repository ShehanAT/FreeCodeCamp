
function dropElements(arr, func) {
  // Drop them elements.
  while(!func(arr[0])){//  ! means false
    arr.shift();//SHIFT REMOVES THE FIRST ELEMENT OF THE ARRAY 
  }
  return arr;
}
