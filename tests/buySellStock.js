

var maxProfit = function(prices)
{
	
	var profit =0
for(var i=0;i<prices.length;i++)
{
	if(prices[i]<prices[i+1])
	{
		profit = profit + (prices[i+1] - prices[i])

	}
}
	console.log(profit)
}
maxProfit([2,4,2,5,10])