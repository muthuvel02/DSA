class LinkedList {
  constructor(value) {
    // initial LinkedList  which has head{value:1 next:null}, tail {value:1, next: null}
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head; // the tail is also pointing to the head
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode; // here we just taken the tail.next that which we have declare int he constructor [ref line: 7]
    this.tail = newNode; // we are doing something like head{value:2 next : {value:2 next:null(newNode's value and its tail) and making the take as the newNode cose the is no other element}
    this.length++; //o-p  head: { value: 2, next: { value: 7, next: null }   tail: { value: 7, next: null }, },
  }
  prepend(value) {
    const newNode = {
      // same apples here instead next we are using the head of the state forward
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printTheValues() {
    // this is just to print the values in the array format
     const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    
  }
  insert(index, value) {
    // state forward
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.loopToTheIndex(index - 1);
    const holdingPointer = leader.next; // making sure we storing the previous next to align after the newNode
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  remove(index) {
    const leader = this.loopToTheIndex(index - 1);
    const unwantedIndex = leader.next; // same like the previous here we are taking the reference and skip them..
    leader.next = unwantedIndex.next;
  }

  loopToTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  revers() {
    if (!this.head.next) return this.head; //[  1, 2, 3, 4, 5 ]

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next; // T1 it will take the 3 |T2 temp will be 4 
      second.next = first; //T1  so 2 -> 1| T2 3->2->1
      first = second; //T1 now first become 2| now 3 become the first
      second = temp; //T1 now the second become 3|T2 now the second become 4
      // refer Linked List 
    }
    this.head.next = null;
    this.head = first;
    return this.printTheValues();
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse2() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printTheValues();
  }
}

const MyLinkedList = new LinkedList();
MyLinkedList.append(1);
MyLinkedList.append(2);
MyLinkedList.append(3);
MyLinkedList.append(4);
MyLinkedList.append(5);

// MyLinkedList.prepend(1);
MyLinkedList.printTheValues();
// MyLinkedList.insert(1,10);
// MyLinkedList.remove(1);

console.log("before reverse",MyLinkedList.printTheValues());
// console.log(MyLinkedList);
MyLinkedList.revers();
console.log("after reverse", MyLinkedList.printTheValues());


