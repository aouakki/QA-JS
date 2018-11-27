var assert = require('assert');
var code = require("../js/main.js")


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });

    it('should return false',function(){
        assert.equal(false,code.isPair(5))
    })

    it('should return true',function(){
        assert.equal(true,code.isPair(4))
    })

    it('should return bonjour + string ',function(){
        var str ="ali"
        assert.equal("bonjour "+str,code.bonjour(str))
    })
  });


  
});
