function outer()
{
    console.log("Outer func");
    function inner()
    {
        console.log("Inner function");
    }
    inner();
}
outer();
/*The inner function can use variables from the outer function */
function out(m,n)
{
    function inn(p,q)
    {
        let inner_addi=p+q;
        return inner_addi;
    }
    return inn(m,n);
}
console.log(out(2,3));