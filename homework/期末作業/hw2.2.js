function neg(a)
{
    var i,j,x=[]
    for(i=0;i<a.length;i++)
    {
        x[i]=[]
        for(j=0;j<a[i].length;j++)
        {
            x[i][j]=0-a[i][j]
        }
    }
    return x
}
console.log(neg([[1,2], [3,4]]))