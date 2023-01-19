// sets

function mySet() {
  // the var collection will hold the set.
  var collection = [];

  // this method will check for the presence of an element and return true.
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method return all values in the set.
  this.values = function () {
    return collection;
  };
  // the method will add an element to the set.
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // removing an element from the set.
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the collection.

  this.size = function () {
    return collection.length;
  };

  // this method would return the union of two sets.
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });

    return unionSet;
  };

  // this method will return the intersection of two sets as a new set.s
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set.

  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every((e) => {
      return otherSet.has(e);
    });
  };
  // this method will test if the set is a subset of a difference set.
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setB.values());
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
