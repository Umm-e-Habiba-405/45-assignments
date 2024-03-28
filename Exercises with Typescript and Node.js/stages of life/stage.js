"use strict";
let stagesOfLife = 19;
if (stagesOfLife < 2) {
    console.log(" the person is a baby.");
}
else if (stagesOfLife >= 2 && stagesOfLife < 4) {
    console.log("the person is a toddler");
}
else if (stagesOfLife >= 13 && stagesOfLife < 20) {
    console.log("The person is a teenager.");
}
else if (stagesOfLife >= 20 && stagesOfLife < 65) {
    console.log("The person is an adult");
}
else {
    console.log(" The person is an elder");
}
