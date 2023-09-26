// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


// Methode 1 - using conditional (ternary) operator 
// condition ? expression_if_true : expression_if_false
function dropElements(arr, func) {
  return arr.length > 0 && !func(arr[0]) ? dropElements(arr.slice(1), func): arr;
}


// methode 2 - using while statement
function dropElements(arr, func){
  
  // Use while loop to iterate through array
  while (arr.length > 0 && !func(arr[0])){

    // Remove the first element if the condition is not met
    arr.shift(); 
  }

  // Return the modified array
  return arr;
}


// methode 3 - tradisional if else
function dropElements(arr, func){

  if (arr.length > 0 && !func(aar[0])){

    return dropElements(arr.slice(1), func);
  } else {
   
    return arr
  }
}


const test = dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
console.log(test)