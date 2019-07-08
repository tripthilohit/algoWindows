//return the index if the substring matches

function returnIndexSubString(string,sub)
{
	var flag

for(var i=0;i<(string.length-sub.length)+1;i++)
{
	flag = true
	for(var j=0;j<sub.length;j++)
	{
		if(string[i+j]!=sub[j])
		{
			flag=false
			break
		}

	}
	if(flag)
		console.log(i)
}
}

returnIndexSubString("hello","ll")