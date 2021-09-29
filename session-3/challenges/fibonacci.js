let total = 0;
let sumOne = 0;
let sumTwo = 1;

for (let i = 0; total < 50; i++) {
  total = sumOne + sumTwo;
  sumOne = sumTwo;
  sumTwo = total;
  if (total > 50) {
    break;
  } else {
    console.log(total);
  }
}

// Needs to be a do while?
