let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('totalPhoneBill' , function(){
    it('returns the total phoneBill ' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms') , 'R7.45' );
    });

    it('returns the total sms ' , function(){
        assert.equal(totalPhoneBill('sms') , 'R0.65' );
    });

    it('returns the total calls ' , function(){
        assert.equal(totalPhoneBill('calls') , 'R0.00' );
    });

});
