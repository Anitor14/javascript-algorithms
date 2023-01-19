var letters = [];

var word = "freecodecamp";

var rword = "";

// put letter of word into stack

for (i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

console.log(letters);

// pop off the stack in reverse order.

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
  console.log(rword);
}

// create a stack

var Stack = function () {
  this.count = 0;
  this.storage = {};
  // adds a value unto the end of the stack.
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  // removes and returns the value at the end of the stack.
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return count;
  };
  // returns the size of the stack.
  this.size = function () {
    return this.count;
  };
  // returns the values at the end of the stack.
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push(5);
myStack.push(6);
console.log(myStack.peek());
console.log(myStack.size());
