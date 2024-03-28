"use strict";
//-------Question No:37------//
// Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.
function make_shirt(size = "large ", printMessge = "I Love Typescript") {
    console.log(`creating a ${size} shirt with the ${printMessge} prints on shirt`);
}
//calling a function with by default values
make_shirt();
//calling a funtion with medium size  deafult message
make_shirt("Medium");
//calling a function  now with small and different print meassge
make_shirt("small", "I Love Javascript");
