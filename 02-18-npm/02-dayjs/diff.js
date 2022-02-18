const dayjs = require('dayjs');

const date1 = dayjs("2019-14-05");
const date2 = dayjs("2018-06-25");

// Difference in seconds
let df1 = date1.diff(date2); 
console.log(df1);

// Difference in months (rounded)
let df2 = date1.diff(date2, "month"); 
console.log(df2);

// Difference in months (floating point)
let df3 = date1.diff(date2, "month", true); 
console.log(df3);

// Difference in days
let df4 = date1.diff(date2, "day"); 
console.log(df4);

// Difference in weeks
let df5 = date1.diff(date2, "week"); 
console.log(df5);