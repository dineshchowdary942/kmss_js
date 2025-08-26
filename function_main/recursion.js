function down(nu)
{
    if( nu==0)
    {
        console.log("Done");
        return;
    }
    console.log(nu);
    down(nu-2);//recursive call until n becomes 0
}
down(10)