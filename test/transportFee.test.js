let assert = require("assert");
let transportFee = require("../transportFee");


describe('transportFee' , function(){
    it('morning shift the transport cost' , function(){
        assert.equal(transportFee('morning'),'R20' );

});
it('afternoon shift the transport cost' , function(){
    assert.equal(transportFee('afternoon'),'R10' );
  });

  it('night shift the transport cost' , function(){
      assert.equal(transportFee('night'),'free' );
    });

});
