Array.prototype.last = function(){
  return this[this.length - 1];
};
Array.prototype.secondToLast = function(){
  return this[this.length - 2];
};

function sumFibs(num) {
  var fibnum = [1,1];
  while( fibnum.last() + fibnum.secondToLast() <= num){
    fibnum.push(fibnum.last() + fibnum.secondToLast());
  }
  var newFib = fibnum.filter(function(item){
      return item % 2 == 1;  
  });
      newFib = newFib.reduce(function(a , b){
    return a + b;
  });
  return newFib;
}

sumFibs(4);
