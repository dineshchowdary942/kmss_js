let dia=[[1,2,3],
         [4,5,6],
         [7,8,9]]

const n=dia.length
for(let i=0;i<n;i++)
{
    console.log(`Diagonal part of ${i}${i} is ${dia[i][i]}`);
}
for(let j=0;j<n;j++)
{
    console.log(`Diagonal part of ${j}${n-1-j} is ${dia[j][j]}`)
}