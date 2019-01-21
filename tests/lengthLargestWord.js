//length of the largest word in a sentence

var lengthLargestWord = function(sentence)
{
	
	var max 
	var splitWords=[]
	splitWords = sentence.split(" ")
	max= splitWords[0].length
	for(var i=0;i<splitWords.length;i++)
	{
		if(max<splitWords[i].length)
		max = splitWords[i].length
	}

console.log("Length of the largest word in the given sentence: "+max)
}


lengthLargestWord(" Hello how are you??3")