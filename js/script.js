// dichiarazione variabili
const kilometers = parseInt(prompt('quanti kilometri vuoi percorrere?'));
const userAge = parseInt(prompt('inserisci la tua età:'));
const pricePerKilometer = 0.21;
let totalPrice;

// esecuzione
totalPrice = kilometers * pricePerKilometer;
// applicazione sconto
if (userAge < 18) {
    let discount = (totalPrice * 20) / 100;
    totalPrice = totalPrice - discount;
}
else if (userAge > 65) {
    let discount = (totalPrice * 40) / 100;
    totalPrice = totalPrice - discount;
}
// output
alert('il costo totale del biglietto è di: ' + totalPrice.toFixed(2) + ' euro');