//string palindromes


var palindrome = function(num)
{ 
  var str = num.toString();
  var flag = true
  var j=0
  for(var i=str.length-1;i>=str.length/2;i--)
  {
    
    if(str[i]!=str[j])
      {
        flag =  false
        break
      }
    else
      j++

  }
  if(flag)
    console.log("The number is a palindrome")
  else
    console.log("The number is not a palindrome")

  
}


palindrome(162621)







