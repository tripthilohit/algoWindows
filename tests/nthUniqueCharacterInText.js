//2nd unique character in a text


var nthUniqueCharacter = function(str,n)
{

var uni = []
var count = 0
var flag 
for(var i=0;i<str.length;i++)
	{
		flag = true
		for(var j=i+1;j<str.length;j++)
		if(str[i]===str[j])
		{
			flag = false
			break
		}
		if(flag && str[i]!=str[i-1])
		{
		uni[count]=str[i]
		count++;
		}
	}

	console.log(uni)
	console.log("The second unique character is :"+uni[n-1])
}



nthUniqueCharacter('qqwerjjektk',2)