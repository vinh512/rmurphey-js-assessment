exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // loop through array looking for item, once found return the index value
    for (var i=0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1; // if not found  return -1
  },

  sum: function(arr) {
    const sum = arr.reduce(function(total, value) {
      return total + value;
    }, 0);
    return sum;
  },

  // iterates through array, if an item does not match push that value into a new array
  remove: function(arr, item) {
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i=0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        // the array has been mutated and its length decreased so the count-decrements takes that into account
        i--;
        len--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    for (var i=0; i < arr2.length; i++) {
      arr1.push(arr2[i])
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i=0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var newArr = [];
    var newObj = {};
    // first iterate and keep count of hits using an object
    for (var i=0; i < arr.length; i++) {
      if (!newObj[arr[i]]) {
        newObj[arr[i]] = 1;
      } else {
        newObj[arr[i]]++;
      }
    }
    // then if there are hits, we push that value into an array
    for (key in newObj) {
      if (newObj[key] > 1) {
        newArr.push(+key)
      }
    }
    return newArr;
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
