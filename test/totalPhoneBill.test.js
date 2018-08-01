let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('PhoneBill' , function(){
    it('. Calculate the total bill for the data provided. ' , function(){
      assert.equal(totalPhoneBill('phone'),'R0.00');
    });

    it('. Calculate the total bill for the data provided.' , function(){
      assert.equal(totalPhoneBill('sms'),'R0.65');
    });

});
