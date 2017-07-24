
function telephoneCheck(str) {
  // Good luck!
  var check = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
  return check.test(str);
}



telephoneCheck("555-555-5555");
