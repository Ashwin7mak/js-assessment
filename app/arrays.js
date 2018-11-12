exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        if (Array.prototype.indexOf) { return arr.indexOf(item); }
    },

    sum: function(arr) {
        let sum = arr.reduce((a, b) => {
            return a + b;
        }, 0);
        return sum;
    },

    remove: function(arr, item) {
        return arr.filter((e) => e != item);
    },

    removeWithoutCopy: function(arr, item) {

    },

    append: function(arr, item) {
        return arr.push(item);
    },

    truncate: function(arr) {
        return arr.pop();
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