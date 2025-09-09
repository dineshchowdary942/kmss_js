function greet(name="Alicce")
{
    console.log(`Hello ${name}`);
}
greet()

function add(a=0,b=0)
{
    return a+b;    
}
console.log(add(5));
console.log(add(undefined,10));


function sub(c=5,d=5)
{
    return c-d;
}
console.log(sub(15,10));
