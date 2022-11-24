// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

// Example 1:

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city.
// Similarly the second one is invalid too.

// Example 2:

// Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// Output: ["alice,50,1200,mtv"]

// Example 3:

// Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// Output: ["bob,50,1200,mtv"]

const invalidTransactions = function (transactions) {
  const names = [];
  const times = [];
  const amounts = [];
  const cities = [];
  const isInvalid = [];

  // Populate lists
  for (let transaction of transactions) {
    let [name, time, amount, city] = transaction.split(",");
    names.push(name);
    times.push(time);
    amounts.push(amount);
    cities.push(city);
    isInvalid.push(false);
  }

  // Flag Invalid Entries
  for (let prev = 0; prev < transactions.length; prev++) {
    if (parseInt(amounts[prev]) > 1000) {
      isInvalid[prev] = true;
    }

    for (let curr = prev + 1; curr < transactions.length; curr++) {
      if (
        Math.abs(parseInt(times[curr]) - parseInt(times[prev])) <= 60 &&
        names[prev] === names[curr] &&
        cities[curr] !== cities[prev]
      ) {
        isInvalid[prev] = true;
        isInvalid[curr] = true;
      }
    }
  }

  // Accumulate flagged/invalid transactions
  const output = [];
  for (let idx = 0; idx < isInvalid.length; idx++) {
    let transaction = transactions[idx];
    if (isInvalid[idx]) output.push(transaction);
  }
  return output;
};
