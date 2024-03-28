"use strict";
//create array
let magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
//create the function
function make_great(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
let greatMagicians = make_great(magicianNames);
//print the message
show_magicians(greatMagicians);
