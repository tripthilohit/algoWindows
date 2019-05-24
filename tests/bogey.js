var prompt = require('prompt-sync')();

var bogey = function()
{

	var startingPos = [],speed = []
	var n = prompt("Enter number of bogeys")


	for(var i=0;i<n;i++)
	{
		startingPos[i]= prompt("Enter starting Pos")
	}
	for(var i=0;i<n;i++)
	{
		speed[i]= prompt("Enter speed")
	}
	
	var sum =0
	for(var i=0;i<n;i++)
	{
				sum +=  parseInt(startingPos[i])
				
				
	}
	console.log("sum outer"+sum)

var counter = 0
while(sum>0)
{
	sum = 0
	counter++
	for(var i=0;i<n;i++)
	{	
				if(startingPos[i]>0)
				{
					startingPos[i]= startingPos[i] - speed[i]
					
				}
	}
			
		for(var j=0;j<n;j++)
	{			
		if(startingPos[j]>0){
				sum +=  parseInt(startingPos[j])
				console.log("sum in loop"+sum)
			}
				
	}
				
			
	
	
	
}

	console.log("The number of seconds Arthur can protect the base is :"+counter)

}

bogey()