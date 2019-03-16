
//nth unique character in a text
//using charAt see link https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/

var nthUniqueCharacterText = function(n,str)
{
	var str1 = str
	var newStr = []
	var count,k =0 
	var c=0
	for(var i=0;i<str.length;i++)
	{		
		var count =0
		for(var j=0;j<str1.length;j++)
		{
			if(str[i]==str1[j])
			{
				count++	
			}
			
		}
		newStr[k]=count
				k++
	}
	console.log(newStr)
	for(var m=0;m<newStr.length;m++)
	{	
		
		if(newStr[m]==1)
			c++
		if(c==n)
			break
	}
	console.log("The unique character is "+str[m])
		
}



nthUniqueCharacterText(3,"abnknbadfghkfgkuk")





//following does not work
/*
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



nthUniqueCharacter('abnknbadfghkfgk',2)

*/