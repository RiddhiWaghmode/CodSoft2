
let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';


if (localStorage.getItem('calculatorState')) {
  string = localStorage.getItem('calculatorState');
  inputBox.value = string;
}


function updateDisplay() {
  inputBox.value = string;
  localStorage.setItem('calculatorState', string);
}

buttons.forEach(element => {
  element.addEventListener('click', (b) => {
    if (b.target.innerText === '=') {
      string = String(eval(string));
      updateDisplay();
    } else if (b.target.innerText === 'AC') {
      string = '';
      updateDisplay();
    } else if (b.target.innerText === 'DEL') {
      string = string.substring(0, string.length - 1);
      updateDisplay();
    } else if (b.target.id === 'plusminus') {
      string = String(-eval(string));
      updateDisplay();
    } else {
      string += b.target.innerText;
      updateDisplay();
    }
  });
});