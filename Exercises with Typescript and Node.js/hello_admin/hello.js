"use strict";
let userNames = ["user1", "user2", "admin", "user3", "user4", "user5"];
for (let username of userNames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
