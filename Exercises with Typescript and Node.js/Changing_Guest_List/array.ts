//--------Question No:15--------//
//You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//Print a second set of invitation messages, one for each person who is still in your list.
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
// Print second set of invitations
console.log("\nUpdated set of invitations:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, please join us for dinner on Saturday.`);
});

