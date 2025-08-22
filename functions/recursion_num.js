function numbers(n)
{
    if (n===0) return;//strict equality when n is 0 it stops recursion(i.e. base class)
    numbers(n-1);
    console.log(n)
}
numbers(12);
numbers(5);
/*function numbers(n)
{
    if (n<=0) return;
    numbers(n-3);//
    console.log(n);
}
//numbers(12);
numbers(10);
n==0 it shoows error because */
function numbers(n)
{
    if (n===0) return;//strict equality when n is 0 it stops recursion(i.e. base class)
    numbers(n-2);//
    console.log(n);
}
numbers(10);
function numbers(n)
{
    if (n<=0) return;
    numbers(n-2);//
    console.log(n);
}
numbers(9);
/* here*n===0 is where the recursion should stop but it won't in n-2 and n-3
because they won't stop at 0 they wont reach 0 if given other num except there multiples */