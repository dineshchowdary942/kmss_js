let arr=new Array(1,2,3,4,5)
console.log(arr);//[1,2,3,4,5]
console.log(arr[2]);//3
console.log(arr.at(-2));//4
arr.push(0,6);
console.log(arr);//[1,2,3,4,5,0,6]
const len=arr.length;//len=7
console.log(len);
arr.pop();
console.log(arr);//[1,2,3,4,5,0]
arr.unshift(10);
console.log(arr);//[10,1,2,3,4,5,0]
arr.shift();
console.log(arr);//[ 1, 2, 3, 4, 5, 0 ]
console.log(arr.includes(10));//false
console.log(arr.indexOf(5));//4
console.log(arr.indexOf(10));//-1
arr[2]=6;
console.log(arr);//[1,2,'3'6,4,5,0]
const newarr=arr.join()//converts array into string
console.log(newarr);
console.log(typeof(newarr));
export {arr}