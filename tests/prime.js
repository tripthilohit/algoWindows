var prime = function(num)
{
    
    var flag=true
    for(var i=2;i<num;i++)
    {
        if(num%i==0)
        {
            flag = false
        break
    }

    }
    if(flag==true)
        return true
    else
        return false

}

var display = function(n)
{
    var primeArr = [2]
    
    for(var j=3;j<n;j++)
    {
        if(prime(j))
            primeArr.push(j)

    }
    console.log(primeArr)
}

display(20)