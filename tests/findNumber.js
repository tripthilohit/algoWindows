var prompt = require('prompt-sync')();

var findNumber = function(arr,num)
{
	var flag = false
	for(var j=0;j<num;j++)
	{
		if(arr[j]===num)
		flag = true
}
if(flag==true)
console.log("Yes")
else
console.log("No")
	


}

var arr = []
var size = prompt('Enter size of the array: ')
for(var i=0;i<size;i++)
{
	arr[i]=prompt("Enter "+i+" number of the array ")
}
var num = prompt("Enter the number that has to be searched")

findNumber(arr,num)