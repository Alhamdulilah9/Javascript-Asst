// Reverse string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); 


// Count Characters
function countCharacters(str) {
  return str.length;
}

// Example usage:
console.log(countCharacters("hello")); 

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example usage:
console.log(capitalizeWords("hello world")); 



// Find Maximum and Minimum

function findMaximum(arr) {
  return Math.max(...arr);
}

function findMinimum(arr) {
  return Math.min(...arr);
}

// Example usage:
console.log(findMaximum([1, 2, 3, 4, 5])); 
console.log(findMinimum([1, 2, 3, 4, 5])); 


// Sum of Array

function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Filter Arrayfunction filterArray(arr, condition) {
  function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example usage:
const isEven = num => num % 2 === 0;
console.log(filterArray([1, 2, 3, 4, 5], isEven)); // Output: [2, 4]
  
  
// Factorial

function factorial(n) {
  if (n < 0) return -1; // Factorial for negative numbers doesn't exist
  if (n === 0) return 1; // Base case: factorial of 0 is 1
  return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120



// Prime Number Check

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Example usage:
console.log(isPrime(11)); // Output: true
console.log(isPrime(15)); // Output: false

// Fibonacci Sequence

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Example usage:
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





