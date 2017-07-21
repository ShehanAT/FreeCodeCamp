function PairingDNA(str){
  str = str.split("");
  var newArr = [];
  for (var i in str){
    if (str[i] == "A"){
      newArr.push(["A","T"]);
    }
    if (str[i] == "T"){
      newArr.push(["T","A"]);
    }
    if (str[i] == "C"){
      newArr.push(["C","G"]);
    }
    if (str[i] == "G"){
      newArr.push(["G","C"]);
    }
  }
  return newArr;


}
pairingDNA("GCG");
