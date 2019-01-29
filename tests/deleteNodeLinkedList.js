'use strict';

function LinkedList () {
    this.head = null;
}

LinkedList.prototype.deleteNode = function (val) {

    if (this.head.data === val) {
        this.head = this.head.next;
    } else {
        var previousNode = this.head;
        var currentNode = previousNode.next;
        while (currentNode) {
            if (currentNode.data === val) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
                break;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
};

// Create an instance of a LinkedList class
var L1 = new LinkedList();

// Create a linked list with six elements
var testData = [5,6,7,8,9,10];
testData.forEach(el => L1.insertNodeAtTail(el));
console.log(L1);

// Delete a head and a tail node
L1.deleteNode(5);
L1.deleteNode(10);
console.log(L1);

// Delete  an intermediate node
L1.deleteNode(7);
console.log(L1);