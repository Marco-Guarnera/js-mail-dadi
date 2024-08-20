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

// Esercizio 02 - Finta Login

/*
1. Recuperare gli elementi dal DOM
2. Creare una lista di emails autorizzate
3. Recuperare l'email dell'utente tramite il form e salvare il dato in una variabile
4. Controllare l'email recuperata:
    - se si trova nella lista stampare un messaggio di accesso effettuato
    - altrimenti stampare un messaggio di accesso negato
*/

// Fase di preparazione

// Recupero gli elementi dal DOM
const formElement = document.getElementById("form");
console.log(formElement);

const emailField = document.getElementById("email");
console.log(emailField);

const messageElement = document.getElementById("message");
console.log(messageElement);

// Creo una lista di emails autorizzate
const authorizedEmails = ["marco.guarnera@gmail.com", "mario.rossi@gmail.com"];
console.table(authorizedEmails);

// Fase di gestione eventi
formElement.addEventListener("submit", function (event) {
    // Blocco l'invio del form e il reloading della pagina
    event.preventDefault();

    // Fase di raccolta dati

    // Recupero l'email dell'utente tramite il form e salvo il dato in una variabile
    const userEmail = emailField.value.trim();
    console.log(userEmail);

    // Email Validation
    if (!userEmail) return;

    // Fase di elaborazione

    // Variabile flag
    let isAuthorized = false;

    // Controllo l'email recuperata
    for (let i = 0; !isAuthorized && i < authorizedEmails.length; i++) {
        const emailToCheck = authorizedEmails[i];
        if (userEmail === emailToCheck) {
            isAuthorized = true;
        }
    }

    const message = isAuthorized ? "Accesso Effettuato" : "Accesso Negato";

    // Fase di produzione

    // Stampo il messaggio
    messageElement.innerText = message;

    // Svuoto il form
    formElement.reset();

})