"use strict";
///-----------Qusetion no:13-----//
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores
// several examples. Use your list to print a series of statements about these items, such as “I would like to
// own a Honda motorcycle.”
// Define an array of favorite modes of transportation
const favoriteTransportation = [
    "Honda motorcycle",
    "Tesla car",
    "Boeing airplane",
];
// Loop through the array and print statements about each item
favoriteTransportation.forEach((item) => {
    console.log(`I would like to own a ${item}.`);
});
