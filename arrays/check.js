hp=new Array(10,20,30,40,50,60)
console.log(hp);
//index
console.log(hp.indexOf(30));
//includes
console.log("includes",hp.includes(30));
console.log("includes",hp.includes(80));
console.log(hp.find(x=>x>30));
console.log(hp.filter(x=>x>30));
console.log(hp.findIndex(x=>x>40));
