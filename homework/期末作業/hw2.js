class vector
{
    constructor(x1,x2,x3)
    {
        this.x1=x1
        this.x2=x2
        this.x3=x3
    }
    add(v2)
    {
        return [this.x1+v2.x1,this.x2+v2.x2,this.x3+v2.x3]
    }
    sub(v2)
    {
        return [this.x1-v2.x1,this.x2-v2.x2,this.x3-v2.x3]
    }
    dot(v2)
    {
        return [this.x1*v2.x1,this.x2*v2.x2,this.x3*v2.x3]
    }
    neg()
    {
        return [0-this.x1,0-this.x2,0-this.x3]
    }
    
}
var v1=new vector(1,2,3)
var v2=new vector(4,5,6)
console.log("v1 = %s",[v1.x1,v1.x2,v1.x3])
console.log("\nv2 = %s",[v2.x1,v2.x2,v2.x3])
console.log("\nv1 + v2 = %s",v1.add(v2))
console.log("\nv1 - v2 = %s",v1.sub(v2))
console.log("\nv1 ‧ v2 = %s",v1.dot(v2))
console.log("\nv1' = %s",v1.neg())
module.exports=vector