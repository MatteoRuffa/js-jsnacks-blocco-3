// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando 
// la somma degli elementi è minore di 50.

// Creiamo un array vuoto
const boxElements = [];

// definiamo in mumeri da chieder all'utente
let numerUser = parseInt(prompt('scegli un numero!'));
console.log(numerUser);

// creo un ciclo while per chieder n numeri fino a che laloro somma e inore di 50
// (proviamo conun flag)
sum = 0;
while (true ) {
    let numerUser = parseInt(prompt('scegli un numero!'));
    console.log(numerUser);
    if(!isNaN(num)) {
        boxElements.push(numerUser);
        sum += numerUser;
        console.log(sum);
    } else {
        console.log("Per favore, inserisci un numero valido.");
    }
}
