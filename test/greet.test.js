let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Ludwe correctly', function(){
        assert.equal('Hello, Ludwe', greet('Ludwe'));
    });
    it('should greet Amanda correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Amanda', greet('Amanda'));
    });
});
