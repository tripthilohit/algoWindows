//string palindromes


var palindrome = function(num)
{ 
  var flag = true
  var j=0
  for(var i=num.length-1;i>=num.length/2;i--)
  {
    
    if(num[i]!=num[j])
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


palindrome('nitin')







