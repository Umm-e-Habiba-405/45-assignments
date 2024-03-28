//----------Question No:18------//
//Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.
// Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
// Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//store variable five places of the world//

let places:string[] =["Taj Mahal","united state","Dubai","Italy","Turkey"];
//print places original order//

 console.log("original order:", places)
//sort the places//

 places.sort();
//print the alphabetically order array//

 console.log("Alphabetically order",places);
//reverse of the original array//

 places.reverse();
// Print your array in reverse alphabetical order without changing the order of the original list.//

 console.log("Reverse alphabetical order",places);
//Reverse the order of your list

 let  array = places.sort().reverse();
//Print the array to show that its order has changed.

 console.log( "order has changed",array);
//Reverse the order of your list again//

 let  array1 = places.reverse().reverse();
//Print the list to show it’s back to its original order.//

 console.log( "back to its original order",array1);
//Sort your array so it’s stored in alphabetical order//

let alphabeticalArray =places.sort().reverse();
// Print the array to show that its order has been changed.//

console.log("order has been changed",alphabeticalArray);
// Sort to change your array so it’s stored in reverse alphabetical order//
 
 let reversedArray = places.reverse().sort();
//Print the list to show that its order has changed.//

 console.log("order has changed",reversedArray);

