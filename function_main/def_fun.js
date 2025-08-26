function hello()
{
    console.log("Welcome home");
}
hello();
/* */
function hi(a,b)
{
    console.log("Welcome abroad",a);
    console.log("this is world",b);
}
hi("ALice");
hi("Brew","Earth");
function sum(a,b)
{
    return 2*(a+b);
}
console.log(sum(10,2))
/* */
function diff(c,d)
{
    let ret= c-d;
    return ret;
}
console.log(diff(10,2))
//
function diff(e,f=2)
{
    let retp= e-f;
    return retp;
}
console.log(diff(15))