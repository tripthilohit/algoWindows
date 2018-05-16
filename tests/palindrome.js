//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
var checkPalindrom = function(palindrom) {

var flag = true;
   var j = 0;
    for( var i = palindrom.length-1; i > palindrom.length / 2; i-- )
    {
        if( palindrom[i] != palindrom[j] )
        {
           flag = false;
           break; // why this? It'll exit the loop at once when there is a mismatch.
        }
        j++;
    }
  if( flag ) {
  console.log('the word is palindrome.');
  }
  else {
console.log('the word is not palindrome.');
  }
}
checkPalindrom('nitin'); 

/*var len = Math.floor(x.length / 2);
  for (var i = 0; i < len; i++)
    if (x[i] !== x[x.length - i - 1])
      return false;
  return true;
*/

	//return x == x.split('').reverse().join('');
    /*
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
   if(isPalindrome(7872))
	console.log("yes")
else
	console.log("no")

*/


