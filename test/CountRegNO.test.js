let assert = require("assert");
let CountRegNO = require("../CountRegNO");


describe('CountRegNo' , function(){
    it('if a registration number is for Gauteng' , function(){
        assert.equal(CountRegNO("0123GP"), true);


    });
        it('if a registration number is not for Gauteng' , function(){
            assert.equal(CountRegNO("CP012"), false);

    });

});
