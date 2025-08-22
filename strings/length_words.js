function length(str) {
    return str.trim().split(/\s+/).length; // Trim spaces, split by one or more spaces, return word count
}

const answer = length(" hi hello this is me "); // Count the number of words in the string
console.log(answer); // Output the result
