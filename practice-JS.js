// function sockMerchant(socks, colors) {
//   let sum = [];
//   let sort = colors.sort();
//   let pairs = 0;

//   for (let i = 0; i < socks - 1; i++) {
//     if (sort[i] === sort[i + 1]) {
//       pairs++;
//       i += 1;
//       // console.log(sort[i]);
//     }
//   }
//   return pairs;
// }

// console.log(sockMerchant(12, [1, 1, 2, 3, 2, 4, 4, 5, 1, 1, 7, 3])); // 3

// 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 7;

// loop through the array and return the total number in the array

// loop through the array and return the total # of a specific number

// sort the array and return all the 1s

// var pairs = [];

//kangaroo

// Find the Odd Int
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// function findOdd(a) {
//   let count = 0;
//   for (let i = 0; i < a.length; i++) {
//     console.log("---i----");
//     console.log(a[i]);
//     for (let j = 0; j < a.length; j++) {
//       if (a[i] === a[j]) {
//         count++;
//       }
//       console.log("--j--");
//       console.log(a[j]);
//       // console.log("---j--");
//       // console.log(j);
//     }
//     if (count % 2 !== 0) {
//       return a[i];
//     }
//   }
// }

// console.log(findOdd([1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5])); // 4

// console log the total number of integers in the array

// console log a number that appears an even number of times

// console log any repeating numbers

//

//

function solution(number) {
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0) {
      count += i;
    } else if (i % 5 === 0) {
      count += i;
    }
  }
  return count;
}

console.log(solution(100));
