//Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
//Input: 1->2->4, 1->3->4
//Output: 1->1->2->3->4->4

function mergeTwoSortedList(l1,l2)
{
	for(var i=0;i<l2.length;i++)
	{
		l1.push(l2[i]);
	}
	//console.log(l1);
	for(i=0;i<l1.length;i++)
	{
		for(j=i+1;j<l1.length;j++)
		{
			if(l1[i]>l1[j])
			{
				temp = l1[i];
				l1[i]=l1[j];
				l1[j]=temp;
			}
		}
	}
return l1;
}


console.log(mergeTwoSortedList([1,3,4],[2,5,6]))