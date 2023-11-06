const input = document.querySelector('#input');
const unitOne = document.getElementById('unit1');
const unitTwo = document.getElementById('unit2');
const button = document.querySelector('.button');
const output = document.querySelector('#output');
const resultSpan = document.querySelector('.full__result');

const convert = () => {
  const inputUnit = unitOne.value;
  const outputUnit = unitTwo.value;

  if (inputUnit === outputUnit) {
    output.value = input.value;
    resultSpan.innerHTML = 'Unidade de entrada é a mesma unidade de saída';
    return;
  }

  let meters;
  if (inputUnit === 'm') {
    meters = input.value;
  } else if (inputUnit === 'km') {
    meters = input.value * 1000;
  } else if (inputUnit === 'cm') {
    meters = input.value / 100;
  } else {
    meters = input.value / 1000;
  }

  let result;
  if (outputUnit === 'm') {
    result = meters;
  } else if (outputUnit === 'km') {
    result = meters / 1000;
  } else if (outputUnit === 'cm') {
    result = meters * 100;
  } else {
    result = meters * 1000;
  }

  output.value = result;

  const message = `${input.value} ${unitOne.options[unitOne.selectedIndex].text} equivalem a ${output.value} ${unitTwo.options[unitTwo.selectedIndex].text}`
  resultSpan.innerHTML = message;
}

button.addEventListener('click', () => convert());