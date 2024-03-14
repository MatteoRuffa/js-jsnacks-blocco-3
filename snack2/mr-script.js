/**
 * Snack3
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
 */

// Fai inserire un numero, che chiameremo N, all'utente.
let numberUser = parseInt(prompt('inserisci il numero di Array che vuoi creare'));

// Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
function generaArrayCasuale() {
    let array = [];
    for(let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

for(let i = 0; i < numberUser; i++) {
    let arrayCasuale = generaArrayCasuale();
    console.log(`Array ${i+1}:`, arrayCasuale);
}