// let num1 = 'katie';
// // let num1 = 8;
// let num2 = 7;

function sum(num1, num2) {
  let args = Object.values(arguments);
  console.log(args);
  if(args.length === 0) {
    return 0;
  }
  if(typeof num1 !== 'number'){
    console.log("must be a number"
    );
    return "must be a number!"
  }
  // console.log(num1 + num2 );
  return num1 + num2;
}

// sum();
// sum(5 ,3);
sum(-1 ,3);
// sum('katie' ,3);

module.exports = sum;
