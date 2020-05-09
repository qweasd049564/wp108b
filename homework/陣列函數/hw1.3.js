function factor(a)
{
    var b=[]
    var i=2
    for(i;i<=a;i++)
    {
        if(a%i==0)
        {
            b.push(i)
            a=a/i
            i=2
        }
    }
    return b
}
console.log(factor(45))