//find the number repeated sequentially the most number of times

var repeatedMostTimesArray = function(arr)
{
	
var countArr=[]

for(var i=0;i<arr.length;i++)
{var count=0
	for(var j=0;j<arr.length;j++)
	{
	if(arr[i]==arr[j])
	count++
	
	}
	countArr[i]=count
	console.log(arr[i]+" "+countArr[i])
}

var big=countArr[0]
for(var k=0;k<countArr.length;k++)
{	

	
	if(countArr[k]>big)
		big=countArr[k]
}
console.log("Number repeated most number of times is "+arr[countArr.indexOf(big)])

}




repeatedMostTimesArray([3,2,4,10,10,7,7,7])