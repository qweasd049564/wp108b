function transpose(a)
{
    var i,j,x=[]
    for(i=0;i<a[0].length;i++)
    {
        x[i]=[]
        for(j=0;j<a.length;j++)
        {
            x[i][j]=a[j][i]
        }
    }
    return x
}

console.log(transpose([[1,2,3],[4,5,6]]))