// PALIDNROME CHECKER
function palindromeChecker() {
  // Dichiarazione variabili
  var wordToReverse = prompt("Inserisci una parola palindroma");

  // Dichiarazione funzioni
  // Funzione che assegna i caratteri in senso invertito agli slot di un altro array e infine vengono riuniti in un unica stringa per la comparazione
  // function reverse(word) {
  //   var wordReversed = [];
  //   for (var i = 0; i < word.length; i++) {
  //     wordReversed[(word.length - 1) - i] = word[i];
  //   }
  //   wordReversed = wordReversed.join("");
  //   return wordReversed;
  // }

  function reverse(word) {
    var wordReversed = "";
    for ( var i = word.length - 1; i >= 0; i-- ) {
      wordReversed += word[i];
    }
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
  console.log( reverse( wordToReverse ) );
  console.log( wordToReverse );

  // Output della verifica
  if ( isPalindrome( wordToReverse ) == true ) {
    console.log("La parola inserita è palindroma");
  } else {
    console.log("La parola inserita non è palindroma, mi dispiace");
  }
}

// GIOCO PARI O DISPARI
function oddOrEvenGame() {

  // Dichiarazione variabile
  var maxNum = 5,
      minNum = 1,
      sum = 0;
  var userNum = parseInt( prompt( "inserisci un numero naturale da " + minNum + " a " + maxNum ) );

  // Controllo input utente
  while ( userNum < minNum  || userNum > maxNum || isNaN( userNum ) ) {     //isNan non importa perchè ci sono già gli operatori di maggioranza
    alert("Il numero inserito non è valido, riprova");
    userNum = parseInt( prompt( "inserisci un numero naturale da " + minNum + " a " + maxNum ) );
  }

  var userChoice = prompt( "Inserisci \"p\" per pari o \"d\" per dispari" ).toLowerCase();

  while ( userChoice != "p" && userChoice != "d" ) {
    alert("L' inserimento non è valido, riprova");
    userChoice = prompt( "Inserisci \"p\" per pari o \"d\" per dispari" ).toLowerCase();
  }

  // Genera un numero random dato un intervallo
  function genRandomNum( max, min ) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
  }

  // A questo punto si da il valore a sum
  sum = genRandomNum( maxNum, minNum ) + userNum;

  // Confronto tra i due numeri
  function isWin( num, control ) {
    if ( ( num % 2 == 0 && control == "p" ) || ( num % 2 == 1 && control == "d" ) ) {
      return true;
    }
    return false;
  }

  // Messaggi output
  console.log("---PARI O DISPARI---");
  if ( userChoice == "p" ) {
    console.log("Hai scelto \"pari\"");
  } else {
    console.log("Hai scelto \"dispari\"");
  }
  console.log("La cpu ha fatto: " + ( sum - userNum ) );
  console.log("La somma è: " + sum );
  if ( isWin( sum, userChoice ) == true ) {
    console.log("Hai vinto!");
  } else {
    console.log("Hai perso, mi dispiace");
  }
}
