let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('countAllFromTown' , function(){
    it('confirms that plates  are from CapeTown' , function(){
assert.equal(countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341', 'CY'), 1);

  });

    it('confirm that plates are not from CapeTown ' , function(){
assert.equal(countAllFromTown('CJ 124, CY 567, CL 345, CF 456, CL 341' , 'CL'), 2);
  });
});
