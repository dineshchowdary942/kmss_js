//Arrays
const fruits=["Apple","Banana","Orange"]
for(let x of fruits)
{
    console.log(x);
}
//strings
const str="nvidia"
for(let y of str)
{
    console.log(y);
}
//sets
const lap=new Set(["HP","Intel","Pavilion",2003])
console.log(lap);
for(let z of lap)
{
    console.log(z);    
}
//maps   below of key and values
const core=new Map([
    ['names','mac'],
    ['ram',8]
])
console.log(core);
//keys,values--->names,mac   -->ram,8
//values
for(let a of core.values())
{
    console.log(a);
}
//keys
for(let b of core.keys())
{
    console.log(b);
}
//both key and values
for(let [key,value] of core.entries())
{
    console.log(`${key}:${value}`);     
}