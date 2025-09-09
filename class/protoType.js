const employee1={
    calTax()
    {
        console.log(`${this.name}'s of salary ${this.salary},tax is 10%`);
    }
};
const employee2={
    calTax()
    {
        console.log(`${this.detail}'s of salary ${this.amount},tax is 25%`);
    }
};
const dsa ={
    name:"qwerty",
    salary:20000,
};
const sad={
    detail:"dell",
    amount:30000,
}
Object.setPrototypeOf(dsa,employee1)//prototype inheritance
Object.setPrototypeOf(sad,employee2)
dsa.calTax()
sad.calTax()