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
  console.log("---VERIFICA UN PALINDROMO---")
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

  // Dichiarazione variabile
  var maxNum = 5,
      minNum = 1;
  var userNum = parseInt( prompt( "inserisci un numero naturale da " + minNum + " a " + maxNum ) );

  // Controllo input utente
  while ( userNum < minNum  || userNum > maxNum || isNaN( userNum ) ) {
    alert("Il numero inserito non è valido, riprova");
    userNum = parseInt( prompt( "inserisci un numero naturale da " + minNum + " a " + maxNum ) );
  }

  var userChoice = prompt( "Inserisci \"p\" per pari o \"d\" per dispari" );
  console.log(userChoice);
  while ( userChoice != "p" && userChoice != "d" ) {
    alert("L' inserimento non è valido, riprova");
    userChoice = prompt( "Inserisci \"p\" per pari o \"d\" per dispari" );
  }
}
  // Genera un numero random dato un intervallo
//   function genRandomNum( max, min ) {
//     return Math.floor( Math.random() * (max - min + 1) ) + min;
//   }
//
//   // Confronto tra i due numeri
//   function comparison( num1 ) {
//     return
//   }
// }
