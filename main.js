function calculate(event) {
  const inputValue = event.target.value;
  const expression = /\+|\*|\-|\//;

  const numbers = inputValue.split(expression);
  const numberA = +numbers[0];
  const numberB = +numbers[1];

  const operation = inputValue.match(expression);
  const operator = operation[0];

  const calculator = new Calculator();
  calculator.add(numberA);
  calculator.add(numberB);
  console.log(calculator.total);
}

document.getElementById('inputValue').addEventListener('change', calculate);
