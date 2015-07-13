//MergeSort
//Warm up 4-8-15

//Based on idea that arrays of size 1 are already sorted
//And based on my previously written Merge function that combines two sorted arrays and returns combined, still-sorted array
//Split up array, and then Merge the sub-components
//merge(mergeSort([1,3],mergeSort([2])) --> This is recursive approach

//Some basic arrays for testing

	var arr1 = [2,11,111,1111];
	var arr2 = [3,14,100];
	var array = [6,2,7,4,1];

var merge = function(arr1,arr2) {
	var count1 = 0;
	var count2 = 0;
	var result = [];

	for (var i = 0; i < (arr1.length+arr2.length); i++) {
		//compare items
		console.log(count1,count2,i,result.length,result,arr1[count1],arr2[count2]);

		if ((arr1[count1] <= arr2[count2]) || (arr2[count2]===undefined)) {
			 //get here if arr1's item is next in line -- and that includes if arr2 has no values left and is giving "undefined" as its next item
			 result.push(arr1[count1]);
			 count1++;
			 
		} else { //get here if arr2's item is next in line
			result.push(arr2[count2]);
			count2++;
		}
	}
	return result;
};

var mergeSort = function(arr) {
    //console.log("Arr is ",arr);
	if (arr.length === 1) {
		return arr;
	} else {
		var firstHalf = arr.slice(0,(arr.length/2));
		var secondHalf = arr.slice(arr.length/2);
		//console.log(firstHalf,secondHalf);
		return merge(mergeSort(firstHalf),mergeSort(secondHalf));
	}
};

//console.log(mergeSort(array));