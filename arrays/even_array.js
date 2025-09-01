const num=[1,20,30,40,50,6,7,8,9]
even_num=[]
for (let i=0;i<num.length;i++)
{
    if (num[i]%2==0)
    {
        even_num.push(num[i])
    }
}
console.log(even_num);
