const numbers=new Array(1,0,1,0,1,0);
console.log(numbers);
numbers.sort();
console.log(`sorting of array is ${numbers}`);
numbers.reverse();
console.log(`reversing the array is ${numbers}`);
arra=Array.from(numbers)
console.log(arra);
//
function number(gama)
{
    return gama.sort((a,b)=>a-b)
}
//const gama=[1,6,5,3,8];
//console.log(number(gama));
console.log(number([1,16,25,13,28]));
//
arr=[1,0,1,0,1,0];
arr.sort((a,b)=>b-a);//descending
console.log(arr);