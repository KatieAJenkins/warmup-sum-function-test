let num1 = 'katie';
// let num1 = 8;
let num2 = 7;

function sum(num1, num2) {
  if(arguments.length === 0) {
    return 0;
  }
  return num1 + num2;
}

// sum(5 ,3);
sum();

module.exports = sum;
