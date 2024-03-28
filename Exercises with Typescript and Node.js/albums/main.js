"use strict";
// Dfine the make album
function makeAlbum(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three function and creating  with different values
let album1 = makeAlbum("umm-e-habiba ", "Album title 1");
let album2 = makeAlbum("muzammil", "Album Title 2");
let album3 = makeAlbum("Shariq", "Album Title 3", 5);
//print values of our object created by function 
console.log(album1);
console.log(album2);
console.log(album3);
