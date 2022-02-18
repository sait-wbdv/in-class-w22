const dayjs = require('dayjs');

let marsPerseverance = dayjs('2021-02-18');

let now = dayjs();
let days = now.diff(marsPerseverance, 'days');

console.log(`On ${now.format('YYYY-MM-DD')}, ${days} days have passed since Perseverance landed on Mars.`);