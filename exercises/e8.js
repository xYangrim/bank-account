
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let greatest = array[0];
  let greatestForReal = [];

  for(const account of array) {
    for(const key in account) {
      if (key === "balance" && account[key] > greatest.balance) {
        greatest = account;
      }
    }
  }
  greatestForReal.push(greatest);
  return greatestForReal;


}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
