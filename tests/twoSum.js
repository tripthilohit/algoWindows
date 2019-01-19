//Find the pairs in an array whose sum is equal to the given number
var twoSum = function(arr,sum)
{

	for(var i=0;i<arr.length;i++)
	{
		for(j=i+1;j<arr.length;j++)
		{
			if(sum==(arr[i]+arr[j]))
			{
				console.log("The numbers are: "+arr[i]+"and"+arr[j])
			}
		}
	}
}
twoSum([9,8,2,1],10)