// Esercizio 01 - Gioco dei dadi

/*
1. Recuperare gli elementi dal DOM
2. Generare un numero random da 1 a 6 per il giocatore
3. Generare un numero random da 1 a 6 per il computer
4. Controllare quale tra i due numeri è quello maggiore
5. Stampare i due numeri e il risultato
*/

// Fase di preparazione

// Recupero gli elementi dal DOM
const playerNumberElement = document.getElementById("player-number");
console.log(playerNumberElement);

const computerNumberElement = document.getElementById("computer-number");
console.log(computerNumberElement);

const resultElement = document.getElementById("result");
console.log(resultElement);

// Genero un numero random da 1 a 6 per il giocatore
const playerNumber = Math.floor(Math.random() * 6) + 1;
console.log("playerNumber:", playerNumber, "type:", typeof playerNumber);

// Genero un numero random da 1 a 6 per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("computerNumber:", computerNumber, "type:", typeof computerNumber);

// Fase di elaborazione

// Variabile result
let result = "";

// Controllo quale tra i due numeri è quello maggiore
if (playerNumber === computerNumber) {
    result = "Nessun vincitore.";
} else if (playerNumber > computerNumber) {
    result = "Vince il giocatore.";
} else {
    result = "Vince il computer.";
}

console.log("result:", result, "type:", typeof result);

// Fase di produzione

// Stampo i due numeri e il risultato
playerNumberElement.innerText = "Numero giocatore: " + playerNumber;
computerNumberElement.innerText = "Numero computer: " + computerNumber;
resultElement.innerText = result;