//Print odd numbers in an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = arr.filter(number => {
  return number % 2 !== 0;
});

console.log(odds); //  [1, 3, 5, 7, 9]

//Convert all the strings to title caps in a string array
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase("welcome to world"));

//  Sum of all numbers in an array
  var array = [4, 8, 7, 13, 12]
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
   console.log(sum); // Prints: 44



//Remove duplicates from an array
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

//Rotate an array by k times
function RightRotate(a, n, k)
{
    k = k % n; 
    for (let i = 0; i < n; i++) {
        if (i < k) {
             document.write(a[n + i - k] + " ");
        }
        else {
            document.write((a[i - k]) + " ");
        }
    }
    
}

let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
  
(RightRotate(Array, N, K));
  
//Return all the prime numbers in an array

function sort_prime(num) {

  var prime_num1 = [],
      prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

console.log(sort_prime(5))
console.log(sort_prime(11))
console.log(sort_prime(19))

//ARROW FUNCTION
//Print odd numbers in an array arrow function
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds1 = arr1  .filter(number => {
  return number % 2 !== 0;
});

console.log(odds1); //  [1, 3, 5, 7, 9]


//Convert all the strings to title caps in a string array
toTitleCase = (str) => {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
console.log(toTitleCase("welcome to world"));

//  Sum of all numbers in an array
 const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const num = numbers.filter(ele => ele % 2 == 0)
                                    .map(ele => ele ** 2);
console.log(num);


//Return all the prime numbers in an array
var numbers1 = [1,2,3,4,5]

ar = numbers.map((number)=>{return number+number})

console.log(ar)
