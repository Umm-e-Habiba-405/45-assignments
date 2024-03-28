 //create array

 let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
//create the function
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `The Great ${magician}`);
}

let greatMagicians: string[] = make_great(magicianNames);
//print the message
show_magicians(greatMagicians);
