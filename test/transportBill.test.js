let assert = require("assert");
let transportBill = require("../transportBill");


describe('transportBill' , function(){
    it('that returns the right price based on the shift you are working. ' , function(){
      assert.equal(transportBill('morningShift'),20);
    });

    it('that returns the right price based on the shift you are working. ' , function(){
      assert.equal(transportBill('afternoonShift'),10 );
    });
    it('that returns the right price based on the shift you are working. ' , function(){
    assert.equal(transportBill('otherShift'),0);
    });
});
