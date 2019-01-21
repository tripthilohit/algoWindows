//nth largest number in an array


var largestNumber = function(arr,num)
{	
	var temp = []
	for(var i=0;i<arr.length;i++)
	{
		for(var j=i+1;j<arr.length;j++)
		{
			if(arr[j]<arr[i])
			{

				temp = arr[i]
				arr[i]= arr[j]
				arr[j]= temp
			}
		}
	}
	for(i=0;i<arr.length;i++)
	{
		console.log(arr[i])
	}
	console.log("The 3rd largest number is : "+arr[num-1])
}


largestNumber([22,11,33,55,44,66],5)