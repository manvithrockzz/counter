const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', function() {
  curValue++;
  mainTitle.textContent = curValue;
});

btnDecrement.addEventListener('click', function() {
  curValue--;
  mainTitle.textContent = curValue;
});

btnReset.addEventListener('click', function() {
  curValue = 0;
  mainTitle.textContent = curValue;
});
