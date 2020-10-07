let massMark = 80;
let massJohn = 114;
let heightMark = 1.8;
let heightJohn = 1.9;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
//Mark's and John's BMI calculated.
BMIMark = Math.floor(BMIMark);
BMIJohn = Math.floor(BMIJohn);
let higherBMI = BMIMark > BMIJohn;

// if (bmiMark > bmiJohn) {
//   console.log('bmiMark higher bmiJohn');
// }
// else if (bmiMark == bmiJohn) {
//   console.log('bmiMark equal bmiJohn');
// }
// else {
//   console.log('bmiJohn higher bmiMark');
// }

console.log(
  `Is Mark's BMI is higher than John's? Answer is ${higherBMI}. Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`
);
