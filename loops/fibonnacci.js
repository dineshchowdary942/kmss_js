let a=0, b=1, turne;//0,1,1,2,3,5,8
//let count=10;
console.log(a);
console.log(b);
for (let i=2;i<10;i++)
{
    turne=a+b;//a,b=b,a+b
    console.log(turne);
    a=b;
    b=turne;
}