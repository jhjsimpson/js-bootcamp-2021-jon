const fizzBuzzWithRange = (start, end) => {
  const terms = [];

  for (let i = start; i <= end; i++) {
    terms.push(fizzBuzz(i));
  }

  return terms.join(", ");
};

fizzBuzzWithRange(1, 2);
console.log(terms);
