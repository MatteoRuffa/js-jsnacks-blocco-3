// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando 
// la somma degli elementi è minore di 50.

// Creiamo un array vuoto
const boxElements = [];

// creo un ciclo while per chieder n numeri fino a che laloro somma e inore di 50
// (proviamo conun flag)
let sum = 0;
while (sum < 50 ) {
    let numerUser = parseInt(prompt('scegli un numero!'));
    console.log(numerUser);
    if(!isNaN(numerUser)) {
        boxElements.push(numerUser);
        sum += numerUser;
    } else {
        console.log("Per favore, inserisci un numero valido.");
    }
    console.log(sum);

    console.log('numbers:', numerUser);
      
}
console.log('Total sum: ', sum); 

