//find the number repeated sequentially the most number of times

var repeatedMostTimesArray = function(arr)
{
	var countArr = []
	var count
	for(var i=0;i<arr.length;i++)
	{
		count =1
		for(var j=i+1;j<arr.length;j++)
		{
			if(arr[i]===arr[j])
			{
			
				count++
			}
		}
		countArr[i]=count
		console.log("Number of times "+arr[i]+ " is present: " +countArr[i])

	}

	var big = countArr[0]
	for(var k=0;k<countArr.length;k++)
			{
				if(countArr[k]>big)
					big=countArr[k]
			}
	
	console.log("The number that is repeated most number of time is :"+ arr[countArr.indexOf(big)])
}




repeatedMostTimesArray([2,4,10,10,10,10,5,3,2,2,5,1,10,10,4,3,5,5])