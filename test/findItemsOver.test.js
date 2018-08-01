let assert = require("assert");
let findItemsOver = require("../findItemsOver");


describe('findItemsOver' , function(){
    it('confirms that items are over' , function(){
assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37}],20),[ {"name" : 'pears', "qty" : 37}])

  });

    it('confirm that items are over' , function(){
assert.deepEqual(findItemsOver([ {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}],20), [ {"name" : 'bananas', "qty" : 27}]);
  });
});
