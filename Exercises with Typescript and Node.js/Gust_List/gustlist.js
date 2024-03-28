"use strict";
//----------Question N0:14---------//
// If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
//Make a list that includes at least three people you’d like to invite to dinner
const guestList = ["Albert Einstein", "Ada Lovelace", "Leonardo da Vinci"];
//print a message to each person, inviting them to dinner.
guestList.forEach((person) => {
    console.log(`Dear ${person}, I would like to invite you to dinner at my place`);
});
