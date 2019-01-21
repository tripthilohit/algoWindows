var lengthLastWord = function(words)
{	
	var n= words.split(" ")
	var w = n[n.length-1]
	console.log(w.length)
}
lengthLastWord('what id your name')


/*
var lengthLastWord = function(str)
{
	var splitStr = str.split(" ")
	var count=0
	for(var i=0;i<splitStr.length;i++)
	{
		console.log("string display "+splitStr[i])
	}

	console.log("last one "+splitStr[splitStr.length-1].length)
	
}

lengthLastWord("hello hello world how are you")
*/

/*
var lengthLastWord = function(str)
{
	var count=0
	for(var i=str.length-1;i>0;i--)
	{
		if(str[i]===' ')
			break;
		else
			count++
	}
	console.log("count is: "+count)
}

lengthLastWord("hello hello world how are you")
*/