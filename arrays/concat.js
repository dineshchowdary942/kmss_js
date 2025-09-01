const one=["wet","cut","pot"]
const two=["qwe","asd","mnb"]
const three=["set","pre" ]
const add=one.concat(two,three);
console.log(add);
//spread
const edit=[...one,...two,...three]
console.log(edit);
//flat
const multi=[1,2,[3,1],4,5,[6,1,[10,20],30],50];
const multiple=multi.flat(Infinity);
console.log(multiple);
const ple=multi.flat(1);
console.log(ple);
//creating an array from a string
console.log(Array.from("hello dausi"));