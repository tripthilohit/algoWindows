 Create a function that takes a number as its argument and returns an array of all its factors.
// factorize(12) ➞ [1, 2, 3, 4, 6, 12]

 function factorize(num)
 {
   if(num==0)
     return null;
  
   var arr = []
   for(var i=1;i<=num;i++)
   {
     num%i==0 ? arr.push(i) : null;
   }
  
   return arr
 }

console.log(factorize(12))


