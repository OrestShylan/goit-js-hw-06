const counter = {
 value: 0,
    increment () {
    this.value += 1;
 },
 decrement() {
    this.value -= 1;
 },
};

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');


btnDecrement.addEventListener('click', function(){
    counter.decrement();
    valueEl.textContent = counter.value;
});
btnIncrement.addEventListener('click',  function(){
    counter.increment();
    valueEl.textContent = counter.value
});