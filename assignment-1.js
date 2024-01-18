      
      
      // assignment 1 //
      
      // question no:1 //


      function reverseString(inputString) {
        let reversedString = '';
      
        for (let i = inputString.length - 1; i >= 0; i--) {
          reversedString += inputString[i];
        }
      
        return reversedString;
      }
      
      const orignal = "helloworld";
      
      const reversed = reverseString(orignal);
      
      console.log(reversed);
      
      
      
      //  soliution 2
      
      
      
      function reverseString(str) {
        if (str === '') {
          return str;
        } else {
          return reverseString(str.substr(1)) + str[0];
        }
      }
      
      // Example usage:
      const originalString = 'Hello, World!';
      const reversed1 = reverseString(originalString);
      console.log(reversed1);
      
      
      // soliution 3
      
      
      function reverseString(inputString) {
        const characters = inputString.split('');
        let start = 0;
        let end = characters.length - 1;
      
        while (start < end) {
          // Swap characters at the start and end positions
          const temp = characters[start];
          characters[start] = characters[end];
          characters[end] = temp;
      
          // Move towards the center
          start++;
          end--;
        }
      
        return characters.join('');
      }
      
      
      
      // soliution 4
      
      function reverseString(inputString) {
        return Array.from(inputString).reduceRight((reversed, char) => reversed + char, '');
      }
      
      // Example usage:
      const originalStrings = 'Hello, World!';
      const reversed2 = reverseString(originalStrings);
      console.log(reversed2);
      
          
              // question no:2
      
      
      
              function countVowels(inputString) {
        const vowels = 'aeiouAEIOU';
        let count = 0;
      
        for (let i = 0; i < inputString.length; i++) {
          if (vowels.includes(inputString[i])) {
            count++;
          }
        }
      
        return count;
      }
      
      
      const testString = 'Hello, Weeorld!';
      const vowelCount = countVowels(testString);
      console.log('Number of vowels:', vowelCount);
      
      
      // soliution 2
      
      
      function countVowels(inputString) {
        const vowels = 'aeiouAEIOU';
        let vowelCount = 0;
      
        for (let i = 0; i < inputString.length; i++) {
          if (vowels.includes(inputString[i])) {
            vowelCount++;
          }
        }
      
        return vowelCount;
      }
      
      // Example usage:
      const testStrings = 'Hello, World!';
      const result4 = countVowels(testStrings);
      
      console.log('Number of vowels:', result4);
      // soliution 3
      
      
      function countVowels(inputString) {
        const vowels = inputString.match(/[aeiouAEIOU]/g);
        return vowels ? vowels.length : 0;
      }
      
      // Example usage:
      const testsString = 'Hello, World!';
      const result5 = countVowels(testsString);
      
      console.log('Number of vowels:', result5);
      // soliution 4
      
      
      function countVowels(inputString) {
        const vowels = inputString.split('').filter(char => 'aeiouAEIOU'.includes(char));
        return vowels.length;
      }
      
      // Example usage:
      const testsStrings = 'Hello, World!';
      const result6 = countVowels(testsStrings);
      
      console.log('Number of vowels:', result6);
      // soliution 5
      
      
      function countVowels(inputString) {
        return inputString.split('').reduce((count, char) => {
          if ('aeiouAEIOU'.includes(char)) {
            return count + 1;
          }
          return count;
        }, 0);
      }
      
      // Example usage:
      const tesstsStrings = 'Hello, World!';
      const result7 = countVowels(tesstsStrings);
      
      console.log('Number of vowels:', result7);
          // question no:3
      
      
          function capitalizeFirstLetter(sentence) {
        const words = sentence.split(' ');
      
        const capitalizedWords = words.map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
      
        return capitalizedWords.join(' ');
      }
      
      
      const inputSentence = 'hello, world! this is a test.';
      const result1 = capitalizeFirstLetter(inputSentence);
      console.log(result1);
      
      
          // soluition no:2
      
          function capitalizeFirstLetter(sentence) {
        return sentence.replace(/\b\w/g, match => match.toUpperCase());
      }
      
      // Example usage:
      const inputSentences = 'hello, world! this is a test.';
      const result8 = capitalizeFirstLetter(inputSentences);
      console.log(result8);
              
              // soluition no:3
      
              function capitalizeFirstLetter(sentence) {
        return sentence
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
      
      // Example usage:
      const inputSentences1 = 'hello, world! this is a test.';
      const result9 = capitalizeFirstLetter(inputSentences1);
      console.log(result9);
      
           // question no:4
      
      
           function isPalindrome(inputString) {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      
        // Compare characters from the beginning and end
        for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
          if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
            return false;
          }
        }
      
        return true;
      }
      
      // Example usage:
      const testString1 = 'A man, a plan, a canal, Panama!';
      const testString2 = 'Hello, World!';
      
      console.log(isPalindrome(testString1)); // Outputs: true
      console.log(isPalindrome(testString2)); // Outputs: false
      
       // soluition no:2
      
      function isPalindrome(inputString) {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      
        // Reverse the string
        const reversedString = cleanedString.split('').reverse().join('');
      
        // Compare the original and reversed strings
        return cleanedString === reversedString;
      }
      
      // Example usage:
      const testString3 = 'A man, a plan, a canal, Panama!';
      const testString4 = 'Hello, World!';
      
      console.log(isPalindrome(testString3)); // Outputs: true
      console.log(isPalindrome(testString4)); // Outputs: false
      
       // soluition no:3
      
       function isPalindrome(str) {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        let start = 0;
        let end = cleanedStr.length - 1;
      
        while (start < end) {
          if (cleanedStr[start] !== cleanedStr[end]) {
            return false; // Characters don't match, not a palindrome
          }
      
          // Move towards the center
          start++;
          end--;
        }
      
        return true; // All characters matched, it's a palindrome
      }
      
      // Example usage:
      // const testString1 = 'A man, a plan, a canal, Panama!';
      // const testString2 = 'Hello, World!';
      
      // console.log(isPalindrome(testString1)); // Outputs: true
      // console.log(isPalindrome(testString2)); 
       
      
      
      
      
      
       // question no:5
      
       function sumOfPositiveNumbers(arr) {
        return arr.reduce((sum, current) => {
          if (current > 0) {
            return sum + current;
          }
          return sum;
        }, 0);
      }
      
      // Example usage:
      const numbers = [1, -2, 3, -4, 5, -6];
      const result = sumOfPositiveNumbers(numbers);
      
      console.log('Sum of positive numbers:', result); // Outputs: 9
      
      // question no:6
      
      
      function findIndex(arr, targetElement) {
        return arr.indexOf(targetElement);
      }
      
      // Example usage:
      const myArray = [1, 2, 3, 4, 5, 3, 6];
      const targetElement = 3;
      
      const index = findIndex(myArray, targetElement);
      
      if (index !== -1) {
        console.log(`The first occurrence of ${targetElement} is at index ${index}.`);
      } else {
        console.log(`${targetElement} is not present in the array.`);
      }
      
      
      // question no:7
      
      function removeDuplicates(arr) {
        const uniqueArray = [];
        
        for (let i = 0; i < arr.length; i++) {
          if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
          }
        }
      
        return uniqueArray;
      }
      
      // Example usage:
      const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7];
      const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
      
      console.log('Array with duplicates:', arrayWithDuplicates);
      console.log('Array without duplicates:', arrayWithoutDuplicates);
      
      
      
      // question no:8
      
          // Bubble Sort for ascending order
      function bubbleSortAscending(arr) {
        const n = arr.length;
      
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
              // Swap elements if they are in the wrong order
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
      
        return arr;
      }
      
      // Bubble Sort for descending order
      function bubbleSortDescending(arr) {
        const n = arr.length;
      
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
              // Swap elements if they are in the wrong order
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
      
        return arr;
      }
      
      // Example usage:
      const unsortedArray = [5, 2, 9, 1, 5, 6];
      const ascendingOrder = bubbleSortAscending([...unsortedArray]);
      const descendingOrder = bubbleSortDescending([...unsortedArray]);
      
      console.log('Original array:', unsortedArray);
      console.log('Sorted array (ascending):', ascendingOrder);
      console.log('Sorted array (descending):', descendingOrder);
      
      
      // question no:9
      
      
      let number1 = 2;
      
      while (number1 <= 20) {
        console.log(number1);
        number1 += 2;
      }
      
      // question no:10
      
      
      function factorial(n) {
        let result = 1;
        let i = 1;
      
        do {
          result *= i;
          i++;
        } while (i <= n);
      
        return result;
      }
      
      // Example usage:
      const number = 5;
      const result2 = factorial(number);
      
      console.log(`The factorial of ${number} is: ${result}`);
      
      
      // question no:11
      
      const myObject = {
        name: 'John',
        age: 25,
        occupation: 'Developer'
      };
      
      for (let key in myObject) {
        if (myObject.hasOwnProperty(key)) {
          console.log(`${key}: ${myObject[key]}`);
        }
      }
      
      // question no:12
      
      
      const originalArray = [1, 2, 3, 4, 5];
      const doubledArray = [];
      
      for (let element of originalArray) {
        doubledArray.push(element * 2);
      }
      
      console.log('Original Array:', originalArray);
      console.log('Doubled Array:', doubledArray);
      
      // question no:13
      
      
      function checkEvenOrOdd(number) {
        if (number % 2 === 0) {
          return `${number} is even.`;
        } else {
          return `${number} is odd.`;
        }
      }
      
      // Example usage:
      const testNumber1 = 4;
      const testNumber2 = 7;
      
      console.log(checkEvenOrOdd(testNumber1)); // Outputs: "4 is even."
      console.log(checkEvenOrOdd(testNumber2)); // Outputs: "7 is odd."
      
      
      // question no:14
      
      function findMaxOfThreeNumbers(a, b, c) {
        const max = a > b ? (a > c ? a : c) : (b > c ? b : c);
        return max;
      }
      
      // Example usage:
      const num1 = 10;
      const num2 = 5;
      const num3 = 8;
      
      const maxNumber = findMaxOfThreeNumbers(num1, num2, num3);
      console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${maxNumber}`);
      
      
      // question no:15
      
      
      function isLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      }
      
      // Example usage:
      const testYear1 = 2000;
      const testYear2 = 2022;
      
      console.log(`${testYear1} is a leap year: ${isLeapYear(testYear1)}`);
      console.log(`${testYear2} is a leap year: ${isLeapYear(testYear2)}`);