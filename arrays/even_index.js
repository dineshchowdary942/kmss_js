const numberic=[1,2,3,4,9,7,2];
const index=[]
const even_index=[];
for (let i=0;i<numberic.length;i++)
{
    if (i%2==0)
    {
        index.push(i);
        even_index.push(numberic[i]);
    }
}
console.log("index position are",index.toString());
console.log(even_index);