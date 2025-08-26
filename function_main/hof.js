function multi(numb)
{
    return function (value)
    {
        return numb*value;
    }
}
const opera=multi(2);
console.log(opera(5));