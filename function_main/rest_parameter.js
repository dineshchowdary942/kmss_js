function info(name,age,...hobby)
{
    console.log(`Name:${name}`);
    console.log(`Age:${age}`);
    console.log(`Hobbies:${hobby}`);
}
info("Alice",33,"Read","Write")
/* rest param is to be declared at the last of the param*/
function show(a,...num)
{
    //console.log(a);
    console.log("num is ",a,"num are",num);
}
//show(1,2,3,4,5,6,7);
show("2","3");