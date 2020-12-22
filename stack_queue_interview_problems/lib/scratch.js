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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
}

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    let str = [];
    let listLen = linkedList.length;
    if(listLen === 0) return null;
    let nextNode = linkedList.head;
    while(listLen > 0){
        str.push(nextNode.value);
        nextNode = nextNode.next;
        listLen--;
    }
    let reverseString = str.reverse().join(' -> ');
    return reverseString;
}

let linkedList = new LinkedList();
linkedList.addToTail('1');
linkedList.addToTail(null);
linkedList.addToTail('A');
linkedList.addToTail(false);
linkedList.addToTail(undefined);

console.log(iterateAcrossLinkedListBackwards(linkedList));
// balancedParens('[{()}]');    
// balancedParens('[{])({)[}');  