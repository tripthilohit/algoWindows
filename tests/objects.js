// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

//console.log(Object.values({ a: 1, b: 2, c: 3 }))

function keysAndValues(obj)
{
  var keys = [],values = [], arr=[]
  
  // Object.keys -> [a, b, c]
  arr.push(Object.keys(obj))
  arr.push(Object.values(obj))
  return arr
  
}
//console.log(keysAndValues({ a: a, b: k, c: 3 }))
//console.log(keysAndValues({ 100: 'a', 2: 'b', 7: 'c' }))
console.log(keysAndValues({ 22: ['Numerical Algorithm', 'Physics', 'Chemistry'],
	83: ['Geometry', 'History', 'Numerical Algorithms', 'Biology', 'Physics'],
	34: ['History', 'Chemistry', 'Biology'],
	72: ['Art', 'Music', 'Tennis']}))