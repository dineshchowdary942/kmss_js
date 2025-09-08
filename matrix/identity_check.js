let iden=[[1,0,0],
          [0,1,0],
          [0,0,1]];

let check_identity=true;
for(let i=0;i<iden.length;i++)
{
    for(let j=0;j<iden[0].length;j++)
    {
        {
            if((i===j && iden[i][j]!==1) || (i!==j && iden[i][j]!==0))
            {
                check_identity=false;
            }
        }
    }
}
console.log(check_identity);
