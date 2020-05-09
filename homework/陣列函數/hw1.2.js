var a=[1,2,3,4,5]

var i,sum=0,avg,total=0,sd,sdavg,avg2
//標準差=√(平方和的平均-平均的平方)
for(i=0;i<a.length;i++)
{
    sum=sum+a[i]
}
avg=sum/a.length
avg2=Math.pow(avg,2)//平均的平方

for(i=0;i<a.length;i++)
{
    total=total+a[i]*a[i]
} //計算平方和

sdavg=total/a.length//平方和的平均

sd=Math.sqrt(sdavg-avg2)
console.log("平方和的平均:",sdavg)
console.log("平均的平方:",avg2)
console.log("標準差:",sd)
