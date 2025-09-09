function create()
{
    let count=0;
    console.log(count);
    return function()
    {
        count=count+2;
        return count;
    }
}
const additioner=create();
console.log(additioner());
console.log(additioner());
console.log(additioner());