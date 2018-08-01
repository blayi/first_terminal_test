module.exports = function(registrationNo,countAll){

  var Town = [];
var allReg= registrationNo.split(', ');

 for (var i=0;i<allReg.length;i++){
   if(allReg[i].startsWith(countAll)){

     Town.push(allReg[i]);

   }
 }
  return Town.length;

}

