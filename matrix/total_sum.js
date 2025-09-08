let a=[[1,2,3],[4,5,6]]
let sum=0;
for(let i=0;i<a.length;i++)
{
    console.log(`a is ${i}`);
    for(let j=0;j<a[i].length;j++)
    {
        sum=sum+a[i][j]
        console.log(`sum of ${i}${j} is ${sum}`);
        
    }
}
console.log(sum);
