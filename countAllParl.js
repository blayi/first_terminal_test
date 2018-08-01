module.exports = function(registrationNo){

var number=registrationNo.split(", ");
var Paarl = [];
for (var i=0;i<number.length;i++){

  if(number[i].startsWith('CJ')){

  Paarl.push(number[i])

}
}
return Paarl.length;
}
