function calci(a,b,opera)
{
    console.log("opera")
    return (opera(a,b));
}
console.log(calci(10,20,(x,y)=>x+y));   
console.log("Multiplication is ",calci(10,20,(x,y)=>x*y));
console.log()