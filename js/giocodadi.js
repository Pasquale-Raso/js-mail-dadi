/*

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.

*/

// 1 - genera numero random da 1 a 6 per il giocatore
// 2 - genera numero random da 1 a 6 per il computer
// 3 - 
// 4 - 
// 5 - 
// 6 - 
// 7 - 
// 8 - 
// 9 - 

var nomeUtente = prompt("Come ti chiami?");
// console.log (nome);

var nGiocatore = Math.floor(Math.random()*7);
// console.log ('Il tuo numero è:', nGiocatore);

var nPc = Math.floor(Math.random()*7);
// console.log ('Il numero del computer è:', nPc);

var ng = document.getElementById('ng');
var np = document.getElementById('np');
var risultato = document.getElementById('risultato')
var nome = document.getElementById('nomeUtente')

if (nGiocatore > nPc) {
    // console.log ('Hai vinto!');
    risultato.innerHTML = 'Hai vinto!';
} else if (nGiocatore < nPc) {
    // console.log ('Hai perso!');
    risultato.innerHTML = 'Hai perso!';
} else { (nGiocatore == nPc)
    // console.log ('Pareggio!');
    risultato.innerHTML = 'Pareggio!';
}

nome.innerText = nomeUtente;
ng.innerText = nGiocatore;
np.innerText = nPc;
