//Number of words in a string without scan or split
/*
var numWordsString = function(str)
{
	
	var count =0 
	for(var i=0;i<str.length;i++)
	{
		if(str[i]===" ")
		{
			count++
		}

		
	}
	return count+1
}


console.log(numWordsString("how are you?"))
*/

var numWordsString = function(str)
{
	var arr
	arr = str.split(" ")
	console.log(arr)
	return arr.length

}


console.log(numWordsString("how are you?"))