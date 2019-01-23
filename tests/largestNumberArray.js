//find the largest number in an array

var largestNumberArray = function(arr)
{
	var big
	big = arr[0]
	for(var i=1;i<arr.length;i++)
	{
		if(arr[i]>big)
			big = arr[i]
	}
	return(big)
}



console.log(largestNumberArray ([2,10,90,8]))