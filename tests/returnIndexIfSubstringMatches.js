//return the index if the substring matches


var subStringIndex = function(str,sub)
{
	
	var k 
	var flag 
	for(var i=0;i<(str.length-sub.length)+1;i++)
	{	flag = true
		
		for(j=0;j<sub.length;j++)
		{
			if(str[i+j]!=sub[j])
			{
				flag=false
				break
			}
			
		}
		if(flag)
{	console.log(i)
	
}

		
	}
	
	if(!flag)
	console.log("null")
	
}




subStringIndex('hello','ll')
/*
var indexSubstring = function(str,sub)
{

console.log(str.indexOf(sub))
}


indexSubstring('hello','lo')*/