"use strict";
//craete the array
let magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
//print the message
show_magicians(magicianNames);
