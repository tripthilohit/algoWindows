//Test Data

/*students and courses
{
	22: [Numerical Algorithm, Physics, Chemistry],
	83: [Geometry, History, Numerical Algorithms, Biology, Physics],
	34: [History, Chemistry, Biology],
	72: [Art, Music, Tennis]
}

Example of the expected output
{
	[22,83]:[Numerical Algorithms, Physics]
	[22,34]:[Chemistry]
}
*/
function keysAndValues(obj)
{
  var key = [],value = [], arr=[]
  
  // Object.keys -> [a, b, c]
  //arr.push(Object.keys(obj))
  //arr.push(Object.values(obj))
  //return arr
  var len = (Object.keys(obj)).length
console.log(len)

  	var keys = Object.keys(obj)
  	var values = Object.values(obj)
  	for(i=0;i<len;i++)
  	{
  		prop = keys[i]
  		value = obj[prop]
  		innerLen = (Object.values(values[i])).length
  		for(var j=0;j<innerLen;j++)
  		console.log(Object.values(values[j]))

  		//console.log(keys[i],keys[i+1])
  		//console.log(values[i],values[i+1])

  	}
  
}
//console.log(keysAndValues({ a: a, b: k, c: 3 }))
//console.log(keysAndValues({ 100: 'a', 2: 'b', 7: 'c' }))
console.log(keysAndValues({ 22: ['Numerical Algorithm', 'Physics', 'Chemistry'],
	83: ['Geometry', 'History', 'Numerical Algorithms', 'Biology', 'Physics'],
	34: ['History', 'Chemistry', 'Biology'],
	72: ['Art', 'Music', 'Tennis']}))