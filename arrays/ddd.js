const num=[10,9,4,3,2,0,20,30];
for (let i=0;i<num.length;i++)
{
    for (let j=i+1;j<num.length;j++)
    {
        if (num[i]<num[j])
        {
            let desc=num[i];
            num[i]=num[j];
            num[j]=desc;
        }
    }
}
console.log(num);
