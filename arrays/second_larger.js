larg=[1,15,16,3,8,4];
larg.sort((a,b)=>a-b);
console.log(larg);
console.log(larg.at(-2));
//
function largersec(numb)
{
    return numb.sort((a,b)=>a-b)
}
const numb=[1,10,2,22,3]
console.log(largersec(numb));
console.log(largersec(numb).at(-2));
