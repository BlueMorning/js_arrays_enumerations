const arrayTasks = {

	concat: function (arr1, arr2) {
    if((arr1 === null || arr1 === undefined) && (arr2 === null || arr2 === undefined)){
      return [];
    }
    else if((arr1 === null || arr1 === undefined)){
      return arr2;
    }
    else if((arr2 === null || arr2 === undefined)){
      return arr1;
    }
    else{
      return arr1.concat(arr2);
    }
	},

	insertAt: function (arr, itemToAdd, index) {
    if(index <= -arr.length){
      index = 0;
    }

    arr.splice(index, 0, itemToAdd);
    return arr;
	},

	square: function (arr) {
     return arr.map(function(value){
        return value**2;
     })
	},

	sum: function (arr) {
    return arr.reduce(function(accumulator, value){
        return accumulator += value;
    })
	},

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
