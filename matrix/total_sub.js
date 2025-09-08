let a=[[10,6,1],[15,3,2]]
let diff=0;
for(let i=0;i<a.length;i++)//i=0,1
{
    console.log(`a is ${i}`);
    for(let j=0;j<a[i].length;j++)//j=0,1,2
    {
        console.log(a[i][j]);
        diff=a[i][j]-diff;
        console.log(`diff at ${i}${j} is ${diff}`);
    }
}
console.log(diff);