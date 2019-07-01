
var duplicateProduct = function()
{
var n = prompt("Enter number of products")
var name = [],weight = [],cost = []
var product = {}
var i,j
for(i=0;i<n;i++)
{
	name[i] = prompt("Enter name of the product: ")
	
	weight[i]= prompt("Enter weight")
	
	cost[i]= prompt("Enter cost")
	product[i] = name[i].concat(weight[i]).concat(cost[i])
	
}
var counter = 0
for(j=1;j<n;j++)
{	
	if(product[0]===product[j])
		counter++

}

console.log("Duplicate number of products is: "+counter)

}

 duplicateProduct()





/*var prompt = require('prompt-sync')();

var duplicateProduct = function()
{
var n = prompt("Enter number of products")
var name = [],weight = [],cost = []
var product = {}
var i,j
for(i=0;i<n;i++)
{
	name[i] = prompt("Enter name of the product: ")
	
	weight[i]= prompt("Enter weight")
	
	cost[i]= prompt("Enter cost")
	product[i] = name[i].concat(weight[i]).concat(cost[i])
	
}
var counter = 0
for(j=1;j<n;j++)
{	
	if(product[0]===product[j])
		counter++

}

console.log("Duplicate number of products is: "+counter)

}

 duplicateProduct()
*/