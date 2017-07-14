//adding /g replaces all occurances of a variable
function spinalCase(str){
    str = str.replace(/[_]/g,"-");
	str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
    str = str.replace(/([ ])([a-zA-z])/g, '$1-$2').split(" "); 
    str = str.join("").toLowerCase();
    return str;
}


spinalCase('The_Andy_Griffith_Show');
