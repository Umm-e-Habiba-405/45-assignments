//---------Question No:21----------//
//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.

// Define interfaces for different types of items
// Define interfaces for different types of items
// Define interfaces for different types of animals
interface Animal {
    species: string;
    habitat: string;
    sound: string;
}
// Create objects containing information about different animals
const lion: Animal = {
    species: "Lion",
    habitat: "Grasslands",
    sound: "Roar"
};
const dolphin: Animal = {
    species: "Dolphin",
    habitat: "Ocean",
    sound: "Clicks and whistles"
};
const monkey: Animal = {
    species: "Monkey",
    habitat: "Tropical Rainforest",
    sound: "Chatter"
};
// Log the objects to the console
console.log("Lion:", lion);
console.log("Dolphin:", dolphin);
console.log("Monkey:", monkey);

