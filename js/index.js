// Task 1

// function concatStrings(obj) {
//     let result = "";

//     function recurse(subObj) {
//         for (let key in subObj) {
//             if (typeof subObj[key] === 'string') {
//                 result += subObj[key];
//             } else if (typeof subObj[key] === 'object' && subObj[key] !== null) {
//                 recurse(subObj[key]);
//             }
//         }
//     }

//     recurse(obj);
//     return result;
// }

// // Test case
// const obj = {
//     a: "Hello",
//     b: {
//         c: " ",
//         d: {
//             e: "World",
//             f: {
//                 g: "!"
//             }
//         }
//     }
// };
// console.log(concatStrings(obj)); // Output: "Hello World!"


// Task 2

// function sortByLength(s) {
//     return s.split(' ') // So'zlarni ajratish
//     .sort((a, b) => a.length - b.length) // So'zlarni uzunligi bo'yicha tartiblashtirish
//     .join(' '); 
// }

// // Test case
// console.log(sortByLength("short longest medium")); // Output: "short medium longest"
// console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"

// Task 3

// function findNumbers(obj) {
//     let result = "";

//         function recurse(subObj) {
//             for (let key in subObj) {
//                 if (typeof subObj[key] === 'number') {
//                     result += subObj[key];
//                 } else if (typeof subObj[key] === 'object' && subObj[key] !== null) {
//                     recurse(subObj[key]);
//                 }
//             }
//         }
    
//         recurse(obj);
//         return result;
//     // Code here
// }

// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(findNumbers(obj)); // Output: [1, 2, 3, 4]

// Task 4

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (let i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }

// console.log(longestWord("Find the longest word in this sentence"))

// Task 5

// function reverseUpperCase(word) {
//     let upperCaseString = word.toUpperCase();
    
//     // Teskari tartibda qaytarish
//     let reversedString = upperCaseString.split('').reverse().join('');
    
//     return reversedString;
// }

// // Test case
// console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
// console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"

// Task 6

// function extractNumbers(s) {
//     const [nums] = s.match(/(\d+)/);
//     return {nums}
//  }
 
//  // Test case
//  console.log(extractNumbers("There are 3 apples and 4 oranges"));
// //  console.log(extractNumbers("123 Main St.")); // Output: [123]

// Task 7

// function isPalindrome(s) {
//     let cleanedString = "";
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i].toLowerCase();
//         if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
//             cleanedString += char;
//         }
//     }
    
//     const length = cleanedString.length;
//     for (let i = 0; i < length / 2; i++) {
//         if (cleanedString[i] !== cleanedString[length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// // Test cases
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("Hello, World!")); // Output: false

// Task 8

// function capitalizeWords(s) {
//     const words = s.split(' ');

//     const capitalizedWords = words.map(word => {
//         if (word.length > 0) {
//             return word[0].toUpperCase() + word.slice(1).toLowerCase();
//         } else {
//             return word;
//         }
//     });

//     return capitalizedWords.join(' ');
// }

// // Test cases
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
// console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"
