// Named functionOne and take 2 arguments
function functionOne(firstNumber, secondNumber) {
    // Created a variable sum and added the numbers together    
    var sum = firstNumber + secondNumber;
    // multiply the sum by 5 and return it
    return sum*5;
}
// Print functionOne 3 times as requested
console.log(functionOne(5, 5)); // 50
console.log(functionOne(8, 9)); // 85
console.log(functionOne(1, 2)); // 15

// Named functionTwo and take one argument, a string (word)  
function functionTwo(word) {
    // checks if the word length is greater than 10 and returns true
    if (word.length > 10) {
        return true;
    // otherwise it returns false
    } else {
        return false;
    }
}
// Print functionTwo 3 times as requested
console.log(functionTwo(`sparrow`)); // false
console.log(functionTwo(`hummingbird`)); // true
console.log(functionTwo(`robin`)); // false

// Named functionThree and take one argument an array of strings (words)
function functionThree(words) {
    // Looping over the words
    for (var counter = 0; counter < words.length; counter++) {
        // Finding if the word starts with (ph)
        if (words[counter].startsWith("ph")) {
            return words[counter];
        }
    }
}

//Print functionThree 3 times as requested
console.log(functionThree(["phantom","ghost","fairy"])); // phantom
console.log(functionThree(["book", "philosophy", "phrase", "life"])); // philosophy
console.log(functionThree(["fire", "water", "air", "earth", "elements",])); // undefined


