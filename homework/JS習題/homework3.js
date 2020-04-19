function countPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
a=3,b=7,count=0;
for(j=a;j<=b;j++){
    if(countPrime(j)){
        count++;
    }
}
console.log('countPrime(',a,',',b,')=>',count);