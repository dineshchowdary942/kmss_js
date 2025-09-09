/*It is a concise way to write a program using "=>" (
syntax: (parameters)=>expressions*/
const addit =(a,b)=>a+b;
console.log(addit(2,3));
console.log(addit(4,8));
/*syntax: (parameters)=>
{statements}*/
const multiply = (c,d)=>
{
    var mull=c*d;
    return `multiplying ${c} and ${d} is ${mull}`
}
console.log(multiply(10,3));
console.log(multiply(10,4));
//
const power =a=>a**a;
console.log(power(3))

