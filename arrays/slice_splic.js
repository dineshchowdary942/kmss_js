// import { arr } from "./create.js";
// console.log(arr);
myarray=[10,20,30,40,50,60];
      // [0, 1, 2, 3, 4, 5]
console.log("given array is ",myarray);
console.log("length of given array",myarray.length);
let arr1=myarray.slice(1,4);//slice(index,length)
console.log("sliced part of arr1",arr1);
console.log("After slicing",myarray)


let arr2=myarray.splice(2,2,100);
console.log("deleted in arr2",arr2);//splice(startIndex, deleteCount, add at startindex)
console.log("After splicing given array ",myarray);


let arr3=[10,50,60];
arr3.splice(2,0,20,30,40)
console.log("adding in arr3",arr3);

let arr4=[10,15,20,25,30,35];
arr4.fill(22,1,3)//fill(value,start,length)
console.log(arr4);

const arrnA=["ola","ibm","microsoft","google","Netflix","bloomberg"];
arrnA.shift();
console.log(arrnA);
arrnA.unshift("ola")
console.log(arrnA);
arrnA.splice(3,1,"mcd")
console.log(arrnA);
arrnA.push("Amazon");
console.log(arrnA);;
//
const arrayA=["google"];
arrayA.split(",");
console.log(arrayA);
// const a=[10,9,4,3,2,0,20,30];
// let temp=[];
// for (let i=0;i<a.length;i++)
// {
//     for (let j=i+1;j<a.length;j++)
//     {
//         if (a[i]<a[j])
//         {
//             a.push(a[j]);
//         }
//         else
//         {
//             a.unshift(a[i]);
//         }
//     }
// }
// console.log(a);