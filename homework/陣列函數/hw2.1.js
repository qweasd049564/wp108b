function arrayadd( a , b )
{
    var i,j,x=[]
    for(i=0;i<a.length;i++)
    {
        x[i]=[]
        for(j=0;j<a[i].length;j++)
        {
            x[i][j]=a[i][j]+b[i][j] 
        }
    }
    return x;
}
console.log(arrayadd([[1,2],[3,4]], [[1,1],[1,1]]))