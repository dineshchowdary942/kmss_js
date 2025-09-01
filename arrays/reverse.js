// art=[1,10,52,32];
// art.reverse();
// console.log(art);
//function
function numrev(numm)
{
    return numm.slice().reverse();//slice is usedto make a shallow copy of array
}
const numm=[10,3,25,33,36,56]
console.log(numrev(numm));
console.log(numm);