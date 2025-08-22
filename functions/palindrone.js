function palin(word)
{
    var reversed= word.split("").reverse().join("");
    return (word===reversed) ? reversed+" is a palindrone":reversed+" not a palindrone"
}
console.log(palin("malayalam"))
console.log(palin("hello"))
/*
function palin(word)
{
    var str=String(word);
    var reversed= str.split("").reverse().join("");
    return (word==reversed) ? reversed+" is a palindrone":reversed+" not a palindrone";
}
console.log(palin("malayalam"))
console.log(palin(1234321))
*/