const people={
    company:"Hp",
    ram:4,
    proce:"nvidia"
}
console.log(people);

for(let i in people)
{
    console.log(i);
    let j=people[i];
    console.log(`${i}:${j}`);
}

// for(let k in people)
// {
//     console.log(k,people[k]);
    
// }