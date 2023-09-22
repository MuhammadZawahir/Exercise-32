"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users = ["Ali", "Ahmad", "Basit", "Daniyal", "Fahad"];
let new_users = ["Muneeb", "ali", "Jamil", "FAHAD", "Irfan"];
let currentLowercaseUsers = current_users.map(user => user.toLowerCase());
for (let newUser of new_users) {
    let newLowercaseUser = newUser.toLowerCase();
    if (currentLowercaseUsers.includes(newLowercaseUser)) {
        console.log("The username is not available.");
    }
    else {
        console.log("This username is available.");
    }
}
