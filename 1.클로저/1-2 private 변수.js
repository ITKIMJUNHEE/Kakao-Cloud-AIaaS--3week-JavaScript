function createBankAccount(initialBalance) {
  let balance = initialBalance;
  let history = [];

  return {
    deposit: (amount) => {
      balance += amount;
      history.push({ type: 'deposit', amount: amount });
    },
    withdraw: (amount) => {
      if (balance < amount) {
        return false;
      }
      balance -= amount;
      history.push({ type: 'withdraw', amount: amount });
      return true;
    },
    getBalance: () => balance,
    getHistory: () => history
  };
}

const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); 
console.log(account.withdraw(2000)); 
console.log(account.withdraw(300)); 
console.log(account.getBalance()); 
console.log(account.getHistory());