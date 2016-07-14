var Bank = require('../bank');
var Account = require('../account');
var assert = require('chai').assert;


describe( "Bank", function() {

  beforeEach( function() {
    bank = new Bank("Give Us Your Money!");

    frank = new Account("Frank", 50, "personal");
    jessie = new Account("Jessie", 250, "business");
    elliot = new Account("Elliot", 650, "business");
    edie = new Account("Edie", 1000, "personal");

  })
  
  it ("Bank has a terrible name", function(){
    assert.equal("Give Us Your Money!", bank.name);
  })

  it ("Bank has no customers", function(){
    assert.equal(0, bank.accounts.length);
  })

  it ("Bank has a customer", function(){
    bank.addAccount(edie)
    assert.equal(1, bank.accounts.length)
  })


})