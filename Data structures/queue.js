class Queue {
    constructor()
    {
        this.items=[];
    }
    enqueue(element)
    {
        this.items.push(element);
    }
    size()
    {
        return this.items.length;
    }
    isEmpty()
    {
        return this.size()===0; //this.items.length===0;
    }
    dequeue()
    {
        if (this.isEmpty())
        {
            return "No one in Queue"
        }
        return this.items.shift();
    }
    front()
    {
        if (this.isEmpty())
        {
            return "No one in front..peek"
        }
        return this.items[0];
    }
    printQueue()
    {
        let queuestr="";
        for (let i = 0; i < this.size(); i++)  //this.items.length;
        {
            queuestr = queuestr+this.items[i]+ ",";
        }
        console.log("Queue:",queuestr);  
    }
}
const items=new Queue();
items.enqueue(10);
items.enqueue(25);
items.enqueue(15);
items.printQueue();

console.log("length:",items.size());
console.log("Is it Empty:",items.isEmpty());
console.log("Dequeue:",items.dequeue());
console.log("Front val:",items.front());
console.log(items);

console.log("Dequeue:",items.dequeue());
console.log("Dequeue:",items.dequeue());
console.log("Front val:",items.front());
console.log("length:",items.size());
console.log("Is it Empty:",items.isEmpty());
console.log("Dequeue:",items.dequeue());
console.log(items);
