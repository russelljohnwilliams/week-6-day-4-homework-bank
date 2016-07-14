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
    accounts = _.sortBy(this.accounts, ['money']).reverse();
    return accounts[0];
  },

  totalCash: function(){
    total = _.sumBy(this.accounts, 'money');
    return total
  },

  findAverage: function(){
    return bank.totalCash() / this.accounts.length;
  }

}


module.exports = Bank;











// setTotal: function() {
//   this.total = 0;
//   this.accounts.forEach( function(account) {
//     this.total += account.money;
//   }.bind( this ))
// },



// findAverage: function(){
//   console.log(this.total);

//   return this.total / this.accounts.length;
// }
