arr=[250,645,300,900,50]
let disc=0;
let aftDisc=0
for(i=0;i<arr.length;i++)
{
    disc=arr[i]/10;
    console.log(`Discount for ${arr[i]} is ${disc}`);
    aftDisc=arr[i]-disc;
    console.log(`After disc amount is:${aftDisc}`);
}
