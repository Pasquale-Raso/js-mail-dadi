/*

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

// 1 - Chiedi all’utente la sua email
// 2 - avere una lista di email
// 3 - ricerca email scritta nella lista
// 4 - stampa se c'è o non c'è


var email = prompt('Digita la tua E-mail');
// console.log("email digitata dall'utente: ", email);

var listaEmail = [ 'pasquale@hotmail.com', 'giuseppe@hotmail.com', 'nicola@hotmail.com', 'sara@hotmail.com', 'Joyce@hotmail.com' ];
// console.table(listaEmail)

var flag = false;

for (var i = 0; i < listaEmail.length; i++) {
    if (email == listaEmail[i]) {
        flag = true;
    }
}
if (flag) {
    console.log ('trovato');
} else {
    console.log ('non trovato');
}