class Car
{
    constructor(brand,model,year)
    {
        this.name=brand;
        this.type=model;
        this.year=year;
    }
    desc()
    {
        console.log(`This is build by ${this.name} of year ${this.year}`);   
    }
    work()
    {
        console.log(`Is this ${this.type} working `);
        
    }
}
const myCar=new Car("Toy","qwerty",2020) 
myCar.desc()
myCar.work()