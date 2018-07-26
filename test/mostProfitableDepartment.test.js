let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe('mostProfitableDepartment' , function(){
    it(' return most profitable department' , function(){
        assert.equal(mostProfitableDepartment ([
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'}]), 'carpentry' );
    });
});
