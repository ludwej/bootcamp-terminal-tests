let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday' , function(){
    it('returns false if its weekend' , function(){
        assert.equal(isWeekday('Saturday'), false);;
    });
    it('returns true if its weekday' , function(){
      assert.equal(isWeekday('Monday'), true)
    });
});
