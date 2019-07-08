function jsonParsing()
{
	var jsonStr = '{"name":"Peter","id":3}'
	obj = JSON.parse(jsonStr)
	console.log(jsonStr.name) //undefined
	console.log(obj.name)//Peter
}

jsonParsing()