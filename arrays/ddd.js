const num=[10,9,4,3,2,0,20,30];
for (let i=0;i<num.length;i++)
{
    for (let j=i+1;j<num.length;j++)
    {
        console.log("num[i]",num[i])
        console.log("num[j]",num[j])
        if (num[i]<num[j])
        {
            let desc=num[i];
            num[i]=num[j];
            num[j]=desc;
        }
    }
}
console.log(num);
//
const a=[10,9,4,3,2,0,20,30];
let i=0;
while (i<a.length)
{
    let j=i+1;
    while (j<a.length)
    {
        // console.log("a[i]",a[i]);
        // console.log("a[j]",a[j]);
       if (a[i] <a[j])
       {
        let numeric=a[i];
        a[i]=a[j];
        a[j]=numeric;
       }
       j++;
    }
    i++;
}
console.log(a);
