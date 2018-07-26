let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver' , function(){
    it(' return  return products that have quantity higher than the threshold.' , function(){
        assert.deepEqual(findItemsOver ([{name : 'apples', qty : 10},
                                       {name : 'pears', qty : 37},
                                       {name : 'apples', qty : 3}], 20),
                                       [{'name' : 'pears', 'qty' : 37}]);
    });



});
