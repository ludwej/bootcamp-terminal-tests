let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville' , function(){
    it('returns true if a registration number is for Bellville ' , function(){
        assert.equal(isFromBellville('CY12354') , true );
    });
    it('returns false if a registration number is for Bellville ' , function(){
        assert.equal(isFromBellville('CJ12354') , false );
    });
});
