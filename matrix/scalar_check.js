let scalr=[
    [5,0,0],
    [0,6,0],
    [0,0,7]
]
let first=scalr[0][0];
let scalar_check=true;
for(let i=0;i<scalr.length;i++)
{
    for(let j=0;j<scalr[0].length;j++)
    {
        if(i!==j && scalr[i][j]!==0)
        {
            scalar_check=false;
            break;
        }
        if(i===j && scalr[i][j]!==first)
        {
            scalar_check=false;
            break;
        }
    }
}

if(scalar_check)
{
    console.log("Scalar",scalar_check);
    
}
else
{
    console.log("Scalar",scalar_check);
}