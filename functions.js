
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(num1, num2) {
    return num1 + num2;
}


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(num1, num2, num3) {
    var average = (num1 + num2 + num3) / 3;
    return average;
}


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(string) {
    return string.length;
}


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(num1, num2) {
    if (num2 > num1) {
        return true;
    } else {
        return false;
    }
}


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(name) {
    return 'Hello, ' + name;
}

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(words) {
    var words = 'Dylan';
    var word2 = 'my';
    var word3 = 'man';
    return 'Hello ' + words + ' what is going on ' + word2 + ' ' + word3;
}

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2) {
   return Math.max(num1, num2);
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1,num2,num3) {
    return Math.max(num1,num2,num3);
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    if (char === 'a') {
        return true;
    }
    if (char === 'e') {
        return true;
    }
    if (char === 'i') {
        return true;
    }
    if (char === 'o') {
        return true;
    }
    if (char === 'u') {
        return true;
    }
    
    return false;
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    var newWord = [];
    for each (var letter in word) {
        if isVowel(letter){
            newWord.push(letter);
        }else {
            newWord.push(letter + 'o' + letter)
        }
    }
    return newWord;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(s) {
     var back = '';
  for (var i = s.length - 1; i >= 0; i--)
    back += s[i];
  return back;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    var words = ["Apple", "Banana", "Orange", "Pomegranate", "Peach"];
    var largest = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > largest) {
        largest = words[i].length;
    }
}
        console.log(largest);
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    var words = ['one', 'two', 'three', 'four'];
    for (var i = 0; i < words.length; i++) {
        if (i < words.length) {
            console.log(i);
        }
    }
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    //...
}