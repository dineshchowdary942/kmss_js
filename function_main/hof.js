function multi(numb)
{
    return function (value)
    {
        return numb*value;//2*value
    }
}
const opera=multi(2);//multi function is sy=tored in a variable called opera
const open=multi(3)
console.log("opera",opera(5));//calling opera function with value parameter 5 2*5
console.log("open",open(10));
