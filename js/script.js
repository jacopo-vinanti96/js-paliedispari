// PALIDNROME CHECKER
function palindromeChecker() {
  // Dichiarazione variabili
  var wordToReverse = prompt("Inserisci una parola palindroma");

  // Dichiarazione funzioni
  // Funzione che assegna i caratteri in senso invertito agli slot di un altro array e infine vengono riuniti in un unica stringa per la comparazione
  function reverse(word) {
    var wordReversed = [];
    for (var i = 0; i < word.length; i++) {
      wordReversed[(word.length - 1) - i] = word[i];
    }
    wordReversed = wordReversed.join("");
    return wordReversed;
  }

  // Funzione che restituisce "true" se la parola è uguale quando invertita con un controllo delle maiuscole
  function isPalindrome(word) {
    word = word.toLowerCase();
    if ( reverse(word) == word ) {
      return true;
    }
    return false;
  }

  // Output della parola inserita e invertita
  console.log(reverse(wordToReverse));
  console.log(wordToReverse);

  // Output della verifica
  if ( isPalindrome(wordToReverse) == true ) {
    console.log("La parola inserita è palindroma");
  } else {
    console.log("La parola inserita non è palindroma, mi dispiace");
  }
}

// GIOCO PARI O DISPARI
function oddOrEvenGame() {
  var userNum = parseInt( prompt("inserisci un numero naturale da 1 a 5") );
  while ( userNum < 1  || userNum > 5 || isNaN(userNum) ) {
    alert("Il numero inserito non è valido, riprova");
    userNum = parseInt( prompt("inserisci un numero da 1 a 5") );
  }
  
}
