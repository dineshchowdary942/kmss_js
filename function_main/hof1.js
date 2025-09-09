function make(greet)
{
    return function(name)
    {
        return `${greet},I'm ${name}`
    }
}

const one=make("Hello");
const two=make("Hey");
console.log(one());
console.log(two());

console.log(one("Alice"));
console.log(two("Bob"));
