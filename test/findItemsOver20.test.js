let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe('findItemsOver20' , function(){
    it('confirms if items are over 20' , function(){
assert.deepEqual(findItemsOver20 ([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37}]),[ {"name" : 'pears', "qty" : 37}])

  });

    it('confirm if items are over 20' , function(){
assert.deepEqual(findItemsOver20([ {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}]), [ {"name" : 'bananas', "qty" : 27}]);
  });
});
