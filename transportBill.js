module.exports = function(shift){

 if (shift.startsWith("morning")) {
  return "20";
 }
  else if(shift.startsWith ("afternoon")){
    return "10";
  }
  else if(shift.startsWith("other")){
    return "0";
  }
}
