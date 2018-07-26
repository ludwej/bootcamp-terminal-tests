let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('countAllFromTown' , function(){
    it('should return number registration numbers in the string that is for that town' , function(){
        assert.equal (countAllFromTown('CL 124',"CY 567","CL 345"," CJ 456","CL 341"), 1)
        assert.equal (countAllFromTown("CJ 845","CY 4844","CL 55787"," CF 4546"," CL 5484"),0)
});
});
