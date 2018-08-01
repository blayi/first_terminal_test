module.exports = function(PhoneBill){

var phone =0 ;
  var sms =0;
var Billof= PhoneBill.split(', ');

  for (var i=0; i<Billof.length; i++){

    if (Billof[i]==='call'){
      phone = phone + 2.75;
    }
      else if(Billof[i] === 'sms'){
        sms =sms+0.65;

       }

  }
var ans=phone+sms

return  "R"+ans.toFixed(2);
}
