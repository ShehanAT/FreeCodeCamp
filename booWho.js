//primitive false is not the same as var x = Boolean(false)
function booWho(bool){
  if (bool === Boolean(bool)){
    return true;
  }
  else{
    return false;
  }
}
