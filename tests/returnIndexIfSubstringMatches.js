var returnString = function(s1, s2)
{

for (var i=0;i<s1.length;i++)
{
var flag = true;
var k = i;
for(var j=0;j<s2.length;j++)
{

		if(s1[i]===s2[j])
{	
		  i++;
		}
else 
{
flag = false;
break;
}

}
return k;
	}
if(!flag)
return null;

}

