const dayjs = require('dayjs');

let now = dayjs();

// ISO Standard
console.log("ISO")
console.log(now.format());

// Time
console.log("\nTime")
console.log(now.format("HH:mm:ss"));
console.log(now.format("h:mm:ss a"));

// Date
console.log("\nDate")
console.log(now.format("dddd, MMMM D YYYY"));
console.log(now.format("YYYY-MM-DD"));