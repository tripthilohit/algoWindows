var fibonacii = function(n)
{
	var fib = []
	fib[0] = 0
	fib[1] = 1
	for(var i=0;i<n;i++)
	{
		fib[i+2] = fib[i] + fib[i+1]

	}
	for(var j=0;j<n;j++)
	{
console.log(fib[j])
}

}
fibonacii(8)

/*
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




*/