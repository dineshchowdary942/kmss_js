let a=[[1,2],[3,4]];
let b=[[5,6],[7,8]];
let sub=[[],[]];
for (let i=0;i<a.length;i++)//i=0,1,2
{
    for (let j=0;j<a[i].length;j++)//j=0,1
    {
        sub[i][j]=b[i][j]-a[i][j];
    }
}
console.log(sub);
