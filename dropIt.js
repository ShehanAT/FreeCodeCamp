
function dropElements(arr, func) {
  // Drop them elements.
  while(!func(arr[0])){//  ! means false
    arr.shift();
  }
  return arr;
}
