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

/*
//reverse a string

var reverseString = function(str)
{
	var reverse = []
	j=0
	for(var i=str.length-1;i>=0;i--)
	{
		reverse[j]=str[i]
		j++
	}
	
		console.log(reverse.join(''))
	
}


reverseString("hello world eat and drink")

*/