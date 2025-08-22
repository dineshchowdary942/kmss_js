function count(str) {
    return str.replace(/\s/g, '').length; // Remove all spaces and return the length
}

console.log(count("Hi Hello This is it"));
