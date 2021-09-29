let total = 0;

for (let i = 0; i <= 500; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
    console.log(i);
  }
}
console.log(total);
