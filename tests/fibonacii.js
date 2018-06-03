var fibonacci = function(n)
{
	var a = 1;
	var b = 0;
	var temp;
	while(n>0)
	{
		temp = a;
		a = a + b;
		b = temp;
		n--;
		console.log(b)
	}
	//return b;
}
console.log(fibonacci(5));