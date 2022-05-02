// faccio un ciclo per i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
// inserisco una lista 
const ul = document.querySelector('.list');
const li = document.createElement('li');
li.append(i);
ul.append(li);
//°Stampo "Fizz" per i multipli di 3
//°Stampo "Buzz" per i multipli di 5
//°Stampo "FizzBuzz" per i multipli di entrambi i numeri
if ((i % 3 === 0) && (i % 5 === 0)){
    console.log ('FizzBuzz')
    li.innerText = "FizzBuzz"
    li.classList.add("fizzbuzz");

} else if (i % 3 === 0){
    console.log ('Fizz')
    li.innerText = "Fizz"
    li.classList.add("fizz");
} else if (i % 5 === 0) {
    console.log ('Buzz')
    li.innerText = "Buzz"
    li.classList.add("buzz");
} else {
    console.log (i)
    li.classList.add("default");
};

};