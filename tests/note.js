//find nth largest number

function largestNumber(arr)
{
	var big = arr[0]
	for(var i=1;i<arr.length;i++)
	{
		if(arr[i]>big)
			big = arr[i]
	}
	console.log("Largest is "+big)
}

largestNumber([2,4,3,4,5,3])