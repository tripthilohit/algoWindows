//retuen the largest word in a sentence

var lengthLargestWord = function(str)
{

var strnew = [] 
strnew = str.split(" ")
var largestLength = strnew[0].length
for(var i=0;i<strnew.length;i++)
{
	
	if(strnew[i].length>largestLength)
		largestLength = strnew[i].length
		
}

for(var j=0;j<strnew.length;j++)
{
if(strnew[j].length === largestLength)
console.log(strnew[j])
}
}
lengthLargestWord("hello how are you???")