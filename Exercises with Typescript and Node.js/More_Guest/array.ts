//--------- Question No:16------------//
//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Define the initial list of guests
let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Emma"];
// Print initial set of invitations
console.log("Initial set of invitations:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, please join us for dinner on Saturday.`);
});
// Name of the guest who can't make it
const guestWhoCantMakeIt: string = "Charlie";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to dinner.`);
// Replace the guest who can't make it with a new person
const newGuest: string = "Frank";
const indexToRemove: number = guests.indexOf(guestWhoCantMakeIt);
if (indexToRemove !== -1) {
    guests[indexToRemove] = newGuest;
}
// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table!");
// Add new guests
guests.unshift("Grace"); // Add one guest to the beginning
guests.splice(Math.ceil(guests.length / 2), 0, "Henry"); // Add one guest to the middle
guests.push("Isabella"); // Add one guest to the end
// Print new set of invitations
console.log("\nUpdated set of invitations:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, please join us for dinner on Saturday.`);
});
