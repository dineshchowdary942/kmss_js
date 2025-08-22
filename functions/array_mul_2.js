function multi(arr)
{
    for (let i=0;i<arr.length;i++)
        {
            arr[i]=arr[i]*2;
        }
    return arr;
}
var set1=[1,2,3,4,5];
var set2=[3,7,10];
console.log(multi(set1));
console.log(multi(set2));