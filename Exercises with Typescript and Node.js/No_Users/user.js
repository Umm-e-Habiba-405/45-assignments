"use strict";
let usersName = [" Ahmed", "hiba", "moiz", "shariq"];
if (usersName.length == 0) {
    console.log(" We need to find some users!");
}
else {
    usersName.forEach(oneName => {
        if (oneName == "admin") {
            console.log(`Hello${oneName}  would you like to see a status report`);
        }
        else {
            console.log(`hello ${oneName} thank you for logging in again`);
        }
    });
}
