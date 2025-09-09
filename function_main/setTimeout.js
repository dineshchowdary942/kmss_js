const hello=function(){
    console.log("Hi");
}
setTimeout(hello,6000)
//
setTimeout(() => {
    console.log("After 3.5 sec");
}, 3500);