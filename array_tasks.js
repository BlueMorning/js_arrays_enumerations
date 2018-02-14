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

	removeAndClone: function (arr, valueToRemove) {
    return arr.filter(function(value){
      return valueToRemove !== value;
    })
	},

	findIndexesOf: function (arr, itemToFind) {
    const arrayOfIndexes = [];
    for(let index = 0; index < arr.length; index++){
      if(itemToFind === arr[index]){
        arrayOfIndexes.push(index);
      }
    }
    return arrayOfIndexes;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
    return arr.filter(function(value){
      return value%2 === 0;
    }).map(function(value){
      return value**2
    }).reduce(function(accumulator, value){
      return accumulator+value
    });
	}

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
