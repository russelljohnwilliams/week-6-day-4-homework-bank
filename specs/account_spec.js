_ = require ('lodash')
var Account = require('../account');
var assert = require('chai').assert;


describe( "account", function() {

  beforeEach( function() {
    frank = new Account("Frank", 50, "personal");
    jessie = new Account("Jessie", 250, "business");
    elliot = new Account("Elliot", 650, "business");
    edie = new Account("Edie", 1000, "personal");
  })

  it ("Account holder has a name", function(){
    assert.equal("Frank", frank.name);
  })

  it ("Account holder has money?", function(){
    assert.equal(1000, edie.money);
  })

  it ("account is personal", function(){
    assert.equal("personal", edie.type )
  })

  it ("account is business", function(){
    assert.equal("business", elliot.type )
  })
})
