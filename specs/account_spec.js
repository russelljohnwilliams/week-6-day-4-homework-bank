var Account = require('../account');
var assert = require('chai').assert;


describe( "account", function() {

  beforeEach( function() {
    frank = new Account("Frank", 50);
  })

  it ("Account holder has a name", function(){
    assert.equal("Frank", frank.name);
  })

  it ("Account holder has money?", function(){
    assert.equal(50, frank.money);
  })
})