"use strict";

const fizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} - FizzBuzz`);
      continue;
    } else if (i % 3 == 0) {
      console.log(`${i} - Buzz`);

      continue;
    } else if (i % 5 == 0) {
      console.log(`${i} - Fizz`);
      continue;
    } else {
      continue;
    }
  }
};

fizzBuzz();
