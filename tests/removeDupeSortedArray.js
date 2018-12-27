//return length of the new array
//also the new array
var removeDupeSortedArray = function(arr)
{
	var newarr=[]
	var count = 0
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i]!=arr[i+1])
		{
			
			newarr[count]=arr[i]
			count++
		}

	}
	console.log("count is:"+count)
	return newarr
}

console.log(removeDupeSortedArray([1,1,2,2,3,3,3,5,5]))