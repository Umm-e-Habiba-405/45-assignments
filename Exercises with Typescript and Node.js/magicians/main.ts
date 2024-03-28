//craete the array

let  magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function show_magicians(magicians: string[]): void{
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

//print the message
show_magicians(magicianNames);
