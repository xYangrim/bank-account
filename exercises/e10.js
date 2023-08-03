// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let namesWithLetter = [];

  for(let i = 0; i < array.length; i++) {
    const name = array[i].name;
    const nameLowered = name.toLowerCase();
    const letterLowered = letter.toLowerCase();

    for(let j = 0; j < nameLowered.length; j++) {
      if(nameLowered[j] === letterLowered) {
        namesWithLetter.push(name)
        break;
      }
    }
  }

  return namesWithLetter;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
