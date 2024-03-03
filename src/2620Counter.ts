function createCounter(n: number): () => number {
  let count: number;
  return function () {
    if (count === undefined) {
      count = n;
    } else {
      count += 1;
    }
    return count;
  };
}

const counter = createCounter(-3);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
