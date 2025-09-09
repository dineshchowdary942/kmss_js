const num=[1,2,3]
const numerics=[...num,4,5,6]
console.log(numerics);
//spread in the middle and at the start
const call=[10,30]
const numerical=[111,...call,4,5,6]
console.log(numerical);
//two spread 
let a1=[15,30,45]
let a2=[10,20,30]
let combine=[...a1,...a2]
console.log(combine);
//rest at the end
const grill=[10,30]
const numm=[111,...grill]
console.log(numm);
//
function calc(one,two,...three)
{
    console.log(one);
    console.log(two);
    console.log(three);
}
calc(1,2,3,4,5,6)

