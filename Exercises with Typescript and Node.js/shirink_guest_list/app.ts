//----------Question N0:17------------//
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Initial guest list
let guests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Printing message about inviting only two people
console.log("Due to a delay, I can only invite two people for dinner.");

// Removing guests until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop(); // Remove last guest from the list
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print message to remaining two guests
guests.forEach(guest => console.log(`Hey ${guest}, you're still invited to dinner!`));

// Remove the last two names from the list
guests.pop(); // Remove one guest
guests.pop(); // Remove second guest

// Print the list to confirm it's empty
console.log("Final guest list:", guests); // Should print: Final guest list: []
