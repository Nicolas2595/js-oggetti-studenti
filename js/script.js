/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
*/

// Creare un oggetto che descriva uno studente
var studente = {

    nome: "Nicolas",
    cogonme: "Morelli",
    eta: 25

};

// Stampare tutte le proprieta tramite un ciclo for-in
for( var key in studente) {
    console.log(studente[key]);
}

// Creare un array di oggetti di studenti
var arrayStudenti = 
[
    {
        nome: "Marco",
        cognome: "Rossi",
        eta: 25
    },
    {
        nome: "Franco",
        cognome: "Blu",
        eta: 25
    },
    {
        nome: "Gianfranco",
        cognome: "Gialli",
        eta: 25
    }
];

// Ciclare tutti gli studenti e stampare nome e cognome
for (var i = 0; i < arrayStudenti.length; i++) {
    console.log(arrayStudenti[i].nome, arrayStudenti[i].cognome);
}

//Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
var nuovoStudente = {

    nome: prompt("Inserisci qui il tuo nome"),
    cognome: prompt("Inseriesci qui il tuo cognome"),
    eta: parseInt(prompt("Inseriesci qui la tua eta"))

};
console.log(nuovoStudente);

arrayStudenti.push(nuovoStudente);
console.log(arrayStudenti);