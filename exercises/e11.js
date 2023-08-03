// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  let ballers = [];

  for(let i = 0; i < array.length; i++) {
    let personalSum = 0;

    if('withdrawals' in array[i]) {
    let arrWithdrawals = array[i].withdrawals;
    for(let j = 0; j < arrWithdrawals.length; j++) {
      personalSum += arrWithdrawals[j]
      }
    }
    ballers.push(personalSum);
  }
  return ballers;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
