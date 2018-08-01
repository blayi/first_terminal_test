let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");


describe('mostProfitableDepartment' , function(){
    it('confirms which departments are the most profitable ' , function(){
assert.deepEqual(mostProfitableDepartment ([{department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'}]), 'hardware')

  });

    it('confirms which departments are the most profitable ' , function(){
assert.deepEqual(mostProfitableDepartment([ {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'}]),"carpentry" );
  });
});
