let a=[[1,2,3,4],[5,6,7,8]]
for (let i=0;i<a.length;i++)
{
    console.log(i);
    for (let j=0;j<a[i].length;j++)
    {
        //console.log(a[i][j]);
        console.log(`matrix of a${i}${j} is ${a[i][j]} `);
    }
}