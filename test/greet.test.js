let assert = require("assert");
let greet = require("../greet");

describe('Greet my neighbour' , function(){
    it('should greet the neighbour respectfuly' , function(){
        assert.equal(greet('Lwando'), 'Ola, Lwando');


    });

    it('should greet the neighbour in a good manner' , function(){
        assert.equal(greet('Siya'), 'Ola, Siya');


    });

});
