function words(a,b)
{
    // return a.includes(b)     
    return b.includes(a)
}
console.log(words("hihello","hihq"))
console.log(words("hell","hihello"))

// function words(a,b)
// {
//     //for (i=0;)
// }
// console.log(words("hih","hihello"));

let a="hihello";
let b=['h','i','h']
let c=[];
d=[];
//console.log(a.length);
for (i=0;i<a.length;i++)
{
    c.push(a[i]);
}
console.log(c);
console.log(c.length);
for(j=0;j<c.length;j++)
{
    for(k=0;k<b.length;k++)
    {
        if (c[j]===b[k]);
        {
            d.push(b[k])
        }
        
    }
}
console.log(d);
