function meet(name, greeting)//2parameters 
{
    console.log("hello",name);//one is called a string
    greeting();//
}
function good()/*good is a callback it is an argument to func meet and executed inside meet*/
{
    console.log("Goodbye");
}
meet("qwe",good)  //meet(name,greeting)=good as the greeting argument