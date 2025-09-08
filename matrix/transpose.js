/*[[1,2,3] =>[[1,4]
    [4,5,6]]  [2,5],
             [3,6]]
*/
let m=[[1,2,3],[4,5,6]];
let transpose=[];
for (let j=0;j<m[0].length;j++) //j=>m=0,1,2
{
    transpose[j]=[];    
    for (let i=0;i<m.length;i++) //i=>m[j]=0,1
    {
        transpose[j][i]=m[i][j];
    }
}
console.log(transpose);
