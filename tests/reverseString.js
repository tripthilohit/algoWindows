var reverseString = function(str)
{
	var rev = "";
	for(var i=str.length-1;i>=0;i--)
	{
	rev+=str[i];
	}
	return rev;
}

console.log(reverseString("hello"));