// PROGRAMMA CHE DIA ALL'UTENTE IL PREZZO DEL BIGLIETTO DEL TRENO DA PAGARE

// Numero KM
var numKm = parseInt(prompt("Inserire il numero di chilometri che si deve percorrere."))

// Età
var età = parseInt(prompt("Inserire la sua età."))

// Prezzo biglietto: numKm * 0.21€
var prezzo = numKm * 0.21;

// Calcola sconto -20% per gli under < 18
var scontoYoung = prezzo - ((prezzo / 100) * 20);

// Calcola sconto -40% per gli over > 65
var scontoSenior = prezzo - ((prezzo / 100) * 40);

// Condizioni tariffa Under & Over
if (età < 18) {
  tariffa = scontoYoung
} else if (età > 65) {
  tariffa = scontoSenior
} else {
  tariffa = prezzo
}

// Risultato tariffa
document.getElementById("tariffa").innerHTML = "€ " +  Math.ceil(tariffa);

// Condizioni promo Young & Senior
if (età < 18) {
  promo = "Promo Young! Sconto del 20% agli under 18!"
} else if (età > 65) {
  promo = "Promo Senior! Sconto del 40% agli over 65!"
} else {
  promo = "La tariffa del giorno!"
}

// Display promo
document.getElementById("promo").innerHTML = promo
