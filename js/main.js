// faccio un ciclo per i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
// inserisco una lista 
const ul = document.querySelector('.list');
const li = document.createElement('li');
li.append(i);
ul.append(li);