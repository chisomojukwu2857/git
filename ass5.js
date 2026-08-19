// Create a Date object
const now = new Date();

// Get the date
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

// Get the time
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Display the date
console.log("Date: " + day + "/" + month + "/" + year);

// Display the time
console.log("Time: " + hours + ":" + minutes + ":" + seconds);