
var isPalindrome = function(x)
{
var arr = JSON.parse(x);
    var rev = [];
    for(var j=arr.length; j>=0; j--)
        {
         for(var i=0; i<arr.length; i++)
            {
            rev.push[i]==arr[j];

            }
            
        }
    for(n=0;n<rev.length;n++)
        {
        	 console.log(rev[n])
        }

        
        if(arr===rev)
            {
                return true
    
            }
       else
        return false

    
}

   if(isPalindrome(12321))
	console.log("yes")
else
	console.log("no")