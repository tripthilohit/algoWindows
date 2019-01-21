//merge two list

var sortArray = function(arr)
{
	var temp
	for(var i=0;i<arr.length;i++)
	{
		for(var j=i+1;j<arr.length;j++)
		{
		if(arr[i]>arr[j])
		{
			temp = arr[j]
			arr[j]= arr[i]
			arr[i]= temp
		}
		}

	}
}
var mergeTwoLists = function(arr1,arr2)
{
	sortArray(arr1)
	sortArray(arr2)
	var mergedArray = []
	mergedArray = arr1.concat(arr2)
	sortArray(mergedArray)
	for(var i=0;i<mergedArray.length;i++)
	{
		console.log(mergedArray[i])
	}
}


mergeTwoLists([2,5,3],[7,1,4])