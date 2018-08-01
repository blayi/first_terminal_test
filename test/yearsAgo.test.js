let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo' , function(){
    it('return how many years ago that was' , function(){
assert.equal(yearsAgo('1998'), 20);

  });
  it('return how many years ago that was' , function(){
assert.equal(yearsAgo('1996'), 22);

});

});
