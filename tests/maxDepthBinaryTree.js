var maxDepthBinaryTree = function(node)
{
	var depth = 0;
	if(node==null)
		return 0;
	else 
	{
		depth++;
		depth = Math.max(maxDepthBinaryTree(node.right),maxDepthBinaryTree(node.left))
		return depth;
	}
}