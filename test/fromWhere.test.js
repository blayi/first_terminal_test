let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere' , function(){
    it('a car registration number as a parameter and returns the town the car is from. ' , function(){
      assert.equal(fromWhere('CY123'),'Bellville');
    });

    it('a car registration number as a parameter and returns the town the car is from.' , function(){
      assert.equal(fromWhere('CJ123'),'Paarl');
    });
    it('a car registration number as a parameter and returns the town the car is from.' , function(){
      assert.equal(fromWhere('CA123'),'Cape Town');
    });

});
