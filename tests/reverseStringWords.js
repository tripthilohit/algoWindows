var reverseStringWords = function(str)
{
	
	var words = "";
	var rev = "";

	words = str.split(" ");
	for(var i=0;i<words.length;i++)
	{
		
			rev += words[i].split("").reverse().join('')+" ";
	

	}
	return rev;
}
console.log(reverseStringWords("hello world"));