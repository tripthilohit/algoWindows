//return length of the new array
//also the new array
var sortArray = function(arr)
{
	var temp
	for(var i=0;i<arr.length;i++)
	{
		for(var j=0;j<arr.length-1;j++)
		{
			if(arr[i]<arr[j])
			{
				temp=arr[i]
				arr[i]=arr[j]
				arr[j]=temp

			}
		}
	}
	return arr
}
var removeDupeUnSortedArray = function(arr)
{
	console.log(sortArray(arr))
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

console.log(removeDupeUnSortedArray([3,1,1,2,5,2,3,6,3,3,5,10,5,2,1]))
