//remove given element including duplicates from an array
//return the new array and the length
var removeElement = function(arr,del)
{
	var newarr = []
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i]!=del)
		{
			newarr.push(arr[i])
		}
	}
	console.log("New array length: "+newarr.length)
	return newarr
}
console.log(removeElement([1,2,4,3,5,2,6,2,6,2],6))