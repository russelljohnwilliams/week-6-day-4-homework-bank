var Bank = require('../bank');
var assert = require('chai').assert;


describe( "Bank", function() {

  beforeEach( function() {
    bank = new Bank("Give Us Your Money!");
  })
  
  it ("Bank has a terrible name", function(){
    assert.equal("Give Us Your Money!", bank.name);
  })

  it ("Bank has no customers", function(){
    assert.equal(0, bank.accounts.length);
  })


})