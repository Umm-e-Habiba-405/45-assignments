"use strict";
//create the function
function makeSandwich(...ingredients) {
    console.log("Making a sandwich with the following ingredients:");
    ingredients.forEach((ingredient) => {
        console.log("- " + ingredient);
    });
    console.log("Enjoy your sandwich!\n");
}
// Call the function three times with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Swiss Cheese", "Avocado");
