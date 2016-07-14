var Bank = function(name){
  this.name = name,
  this.accounts = []
  this.total = 0
}

Bank.prototype = {
  addAccount: function(account){
    this.accounts.push(account);
  },

  findAccount: function(name){
    for (var i=0; i < this.accounts.length; i++){
      if (this.accounts[i].name === name){
        return this.accounts[i];
      }
    }
  },

  mostMoney: function(){
    var accounts = _.sortBy(this.accounts, ['money']).reverse();
    return accounts[0];
  },

  totalCash: function(){
    var total = _.sumBy(this.accounts, 'money');
    return total
  },

  findAverage: function(){
    return bank.totalCash() / this.accounts.length;
  },

  totalByType: function(type){
   var result =  _.filter(bank.accounts, { "type": type });
   return _.sumBy(result, 'money');
  }

}


module.exports = Bank;

