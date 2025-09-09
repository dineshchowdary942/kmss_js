a=[[1,2,3],[4,5,6],[7,8,9]];
let m=a.length;
for(let j=2;j>=0;j--)
{
    console.log(a[m-j-1][m-1]);
}
b=[[1,2,3],[4,5,6],[7,8,9]];
let n=b.length;
for(let i=0;i<n;i++)
{
    console.log(b[i][n-1]);
}