let assert = require("assert");
let isWeekday = require("../isWeekday");


describe('isWeekday' , function(){
    it('if the parameter passed in is a day of the week' , function(){
assert.equal(isWeekday('Monday'), true);

  });

    it('if the parameter passed in is not a day of the week .' , function(){
assert.equal(isWeekday('Saturday'), false);
  });
});
