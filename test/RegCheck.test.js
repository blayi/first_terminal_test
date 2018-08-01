let assert = require("assert");
let RegCheck = require("../RegCheck");


describe('RegCheck' , function(){
    it(" if a registration number is for Cape Town " , function(){
        assert.equal(RegCheck("CA0123"), true);


    });
        it(' if a registration number is not for Cape Town ' , function(){
            assert.equal(RegCheck("CP012"), false);

    });

});
