var wordToReverse = prompt("Inserisci una parola palindroma");

function reverse(word) {
  var wordReversed = [];
  for (var i = 0; i < word.length; i++) {
    wordReversed[(word.length - 1) - i] = word[i];
  }
  wordReversed = wordReversed.join("");
  return wordReversed;
}

console.log(reverse(wordToReverse));
console.log(wordToReverse);

function palindromeChecker(word) {
  word = word.toLowerCase();
  if ( reverse(word) == word ) {
    return true;
  }
  return false;
}

if ( palindromeChecker(wordToReverse) == true ) {
  console.log("La parola inserita è palindroma");
} else {
  console.log("La parola inserita non è palindroma, mi dispiace");
}
