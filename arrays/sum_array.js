function addarr(num)
{
    let sum=0;
    for (let i=0;i<num.length;i++)
    {
        sum=sum+num[i];
    }
    return sum;
}
const num=[1,2,3,4,5];
console.log(addarr(num));