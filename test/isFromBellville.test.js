let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville' , function(){
    it('if a registration number is for Bellville' , function(){
        assert.equal(isFromBellville('CY 123'), true);


    });

    it('if a registration number is not for Bellville' , function(){
        assert.equal(isFromBellville('CT 123'), false);


    });

});
