class Stack
{
    constructor() 
    {
        this.data=[];
    }
    push(element)
    {
        this.data.push(element);
    }
    size()
    {
        return this.data.length;
    }
    isEmpty()
    {
        return this.size()===0;//this.data.length===0;
    }
    pop()
    {
        if (this.isEmpty())
        {
            return "Stack is Empty";
        }
        return this.data.pop();
    }
    peek()
    {
        if (this.isEmpty())
        {
            return "Stack's peek is Empty";
        }
        return this.data[this.size()-1]; //this.data[this.data.length-1]
    }
    printStack()
    {
        let stackstr="";//empty string creation
        for (let i = 0; i < this.size(); i++)  //this.data.length;
        {
            stackstr = stackstr+this.data[i]+ ",";
        }
        console.log("Stack:",stackstr);  
    }
}
const data=new Stack();
data.push(10);
data.push(20);
data.push(11);
data.printStack();
console.log("size:",data.size());
console.log("Is Empty:",data.isEmpty());
console.log(data);

console.log("peek:",data.peek());
console.log("pop:",data.pop());
console.log(data);

console.log("pop:",data.pop());
console.log("pop:",data.pop());
console.log("size:",data.size());
console.log(data);

console.log("peek:",data.peek());
console.log("popp:",data.pop());
console.log("Is Empty:",data.isEmpty());


