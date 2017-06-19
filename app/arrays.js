exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // loop through array looking for item, once found return the index value
    for (var i=0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1; // if not found return -1
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

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
