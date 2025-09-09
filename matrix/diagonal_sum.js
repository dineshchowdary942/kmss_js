let diag=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let m=diag.length;
let diaSum=0;
let secSum=0;
for(let i=0;i<m;i++)
{
    diaSum=diaSum+diag[i][i]
    secSum=secSum+diag[i][m-i-1]
}
console.log(`Main Diagonal Sum is ${diaSum}`);
console.log(`Second Diagonal Sum is ${secSum}`);
