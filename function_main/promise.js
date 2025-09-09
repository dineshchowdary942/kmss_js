let prom=new Promise(function(complete,fail)
{
    let success=true;
    if (success)
    {
        complete("It is completed");
    }
    else 
    {
        fail("Error!");
    }
});

prom.then(function(done){console.log(done);}).catch(function(not){console.log(not);})
/*
function prom()
{
    return new Promise(complete,fail)
    {
        let success
    }
}*/