const worker={
    tax()
    {
        console.log("tax is 10%");
    }
}
const id={
    name:"qwert",
    salary:20202,
}
Object.setPrototypeOf(id,worker);
id.tax()