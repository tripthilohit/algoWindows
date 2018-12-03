var mergeBinaryTrees = function(t1,t2)
{
var root
	if(t1.root==null || t2.root==null)
	{
		if(t1.root == null && t2.root == null)
		root = null;
			else if (t1.root == null)
				root =t2;
			else
				root = t1;
	}
	else
	{
			root = new Treenode(t1.val+t2.val());
			root.left = mergeBinaryTrees(t1.left,t2.left);
			root.right = mergeBinaryTrees(t2.right,t2.right);
	}
	return root;
}