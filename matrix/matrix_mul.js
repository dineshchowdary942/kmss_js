let a=[[1,2,3],[4,10,10]];
let b=[[5,6],[7,8],[10,10]];
let mul=[];
for(let i=0;i<a.length;i++)
{
    mul[i]=[];
    {
        for(let j=0;j<b[0].length;j++)
        {
            mul[i][j]=0;
            console.log(mul[i][j]);
            
            for(let k=0;k<b.length;k++)
            {
                // console.log(a[i][k],b[k][j])
                // mul[i][j]+=a[i][k]*b[k][j]
                console.log("i,k------------->",i,k);
                console.log("k,j------------->",k,j);
                console.log(a[i][k],b[k][j])
                 mul[i][j]+=a[i][k]*b[k][j]
            }
        }
    }
}
console.log(mul);
    