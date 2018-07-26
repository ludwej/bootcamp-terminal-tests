let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere' , function(){
    it('is from  Bellville' , function(){
        assert.equal(fromWhere('CY'),'Bellville' );

});
it('is from  Cape Town' , function(){
    assert.equal(fromWhere('CA'),'Cape Town' );
    });
    it('is from  Paarl' , function(){
        assert.equal(fromWhere('CJ'),'Paarl' );
 });
});
