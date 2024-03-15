import React from 'react';

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class PalindromeChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      isPalindrome: false
    };
  }

  componentDidMount() {
    
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next = new ListNode(4);
    head.next.next.next.next.next.next = new ListNode(3);
    head.next.next.next.next.next.next.next = new ListNode(2);
    head.next.next.next.next.next.next.next.next = new ListNode(1);

    
    const result = this.isPalindrome(head);

    
    const numbers = [];
    let current = head;
    while (current) {
      numbers.push(current.value);
      current = current.next;
    }

    
    this.setState({ numbers, isPalindrome: result });
  }

  isPalindrome(head) {
    const reverseList = (node) => {
      let prev = null;
      while (node) {
        const nextNode = node.next;
        node.next = prev;
        prev = node;
        node = nextNode;
      }
      return prev;
    };

    const findMiddle = (node) => {
      let slow = node;
      let fast = node;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    };

    if (!head || !head.next) {
      return true;
    }

    let middle = findMiddle(head);
    let secondHalf = reverseList(middle);

    while (secondHalf) {
      if (head.value !== secondHalf.value) {
        return false;
      }
      head = head.next;
      secondHalf = secondHalf.next;
    }

    return true;
  }

  render() {
    const { numbers, isPalindrome } = this.state;

    return (
      <div>
        <h1>Linked List: {numbers.join(' -> ')}</h1>
        <h2>Is a Palindrome ?  : {isPalindrome.toString()}</h2>
      </div>
    );
  }
}

export default PalindromeChecker;
