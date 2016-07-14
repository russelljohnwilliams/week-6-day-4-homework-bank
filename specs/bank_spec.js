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

  it ("Found bank account by name",function() {
    bank.addAccount(edie)
    assert.deepEqual(edie, bank.findAccount("Edie"))
  })

  it ("Found account with most money", function() {
    bank.addAccount(jessie);
    bank.addAccount(elliot);
    bank.addAccount(edie);
    bank.addAccount(frank);
    assert.equal(edie, bank.mostMoney(1000))
  })

  it ("find total cash in all accounts", function() {
    bank.addAccount(frank);
    bank.addAccount(jessie);
    bank.addAccount(elliot);
    bank.addAccount(edie);
    assert.equal(1950, bank.totalCash())
  })

  it ("found average of all acounts", function(){
    bank.addAccount(frank);
    bank.addAccount(jessie);
    bank.addAccount(elliot);
    bank.addAccount(edie);
    bank.totalCash();
    assert.equal( 487.5, bank.findAverage())
  })

  it ("found total of business accounts", function(){
    bank.addAccount(frank);
    bank.addAccount(jessie);
    bank.addAccount(elliot);
    bank.addAccount(edie);
    assert.equal(900, bank.totalByType())
  })


})