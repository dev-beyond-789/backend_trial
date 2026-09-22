// for (let num = 1; num <= 100; num++) {
//     if (num % 5 === 0) {
//         console.log(num);
//     }
// }

// even no.s under 50
for (let num1 = 1; num1 <= 50; num1++) {
  if (num1 % 2 === 0) {
    console.log(num1);
  }
}

// // assignment one
for (let num3 = 2; num3 <= 70; num3++) {
  let prime = true;

  for (let i = 2; i < num3; i++) {
    if (num3 % i === 0) {
      prime = false;
    }
  }

  if (prime) {
    console.log(num3);
  }
}

// Simple Number Checker

let number = Number(prompt("Enter a number:"));

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
