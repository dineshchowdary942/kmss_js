function checkprime(n)
{
    if (n<=2) return "not_prime";
    for (let i=2;i<=n;i++)
    {
        if (n%i==0) return "not_prime";
    }
    return "prime";
}
console.log(checkprime(15));