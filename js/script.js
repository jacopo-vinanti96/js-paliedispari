var wordToReverse = prompt("Inserisci una parola palindroma");
function palindromeChecker() {
}

function reverse(word) {
  var wordReversed = [];
  for (var i = 0; i < word.length; i++) {
    wordReversed[(word.length - 1) - i] = word[i];
  }
  return wordReversed;
}

console.log(reverse(wordToReverse));
