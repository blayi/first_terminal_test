let assert = require("assert");
let countAllParl = require("../countAllParl");


describe('countAllParl' , function(){
    it('confirms that plates  are from Paarl' , function(){
assert.equal(countAllParl ('CJ 123'), true);

  });

    it('confirm that plates are not from Paarl ' , function(){
assert.equal(countAllParl ('CK 123'), false);
  });
});
