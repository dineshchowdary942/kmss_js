const a=[10,9,4,3,2,0,20,30];
for (let i=0;i<a.length;i++)
{
    for (let j=i+1;j<a.length;j++)
    {
        console.log("a[i]",a[i])
        console.log("a[j]",a[j])
        if (a[i]<a[j])
        {
            let desc=a[i];
            a[i]=a[j];
            a[j]=desc;
        }
    }
}
console.log(a);  