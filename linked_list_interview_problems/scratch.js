//
const linkedList = new LinkedList();
linkedList.addToTail('First');
linkedList.addToTail('Second');
linkedList.addToTail('Third');
linkedList.addToTail('Fourth');
linkedList.addToTail('Fifth');
//
// Current List:  First → Second → Third → Fourth → Fifth → null
//
// const result = reverseLinkedList(root);
//
// Mutated List:  Fifth → Fourth → Third → Second → First → null
//
// result.head.value            => 'Fifth'
// result.head.next.value       => 'Fourth'
// result.tail.value            => 'First'
// result.tail.value.next       =>  null
//
// The old head is now the terminal node!
//
// -----------
// Let's code!
// -----------
function reverseLinkedList(linkedList) {
    // TODO: Implement the reverseLinkedList function!
      let nextNode = linkedList.head.next;
      let prev = linkedList.head;
      let cycle = true;
      let lastNode;
      while(cycle){
        let nodeAfter = nextNode.next;
        if(nodeAfter === null){
          cycle = false;
          lastNode = nextNode;
        }
        nextNode.next = prev;
        if(nextNode.next === linkedList.head){
          linkedList.tail = nextNode.next;
          linkedList.tail.next = null;
        }
        prev = nextNode;
        nextNode = nodeAfter
      }
  
      linkedList.head = lastNode;
      return linkedList;
  }
  
  // ----------------------------------------
  // Given: Singly Linked List - Do Not Edit!
  // ----------------------------------------
  class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    addToTail(val) {
      const newNode = new Node(val);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
  
      this.tail = newNode;
      this.length++;
      return this;
    }
  }
  
  exports.Node = Node;
  exports.LinkedList = LinkedList;
  exports.reverseLinkedList = reverseLinkedList;