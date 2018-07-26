let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('yearsAgo' , function(){
    it('return how many years ago 1998' , function(){
        assert.equal(yearsAgo(1998),20 );
    });
    it('return how many years ago', function(){
        assert.equal(yearsAgo(2015), 3 );
      });

    });
