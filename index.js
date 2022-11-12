timestamp = {
  timecode: now,
  month: month,
  day: "",
  year: year,
};
let time = {
  seconds: now.getSeconds,
  minutes: now.getMinutes,
  hour: now.getHours,
  day: days[now.getDay()],
  month: months[now.getMonth()],
  date: now.getDate(),
  year: now.getFullYear(),
};

let now = new Date();
let TimeStart = Date.now();
months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let month = {
  number: now.getMonth(),
  name: months[now.getMonth()],
};
let year = { year: now.getFullYear() };

Math.trunc((now / 1000 / 3600 / 24) % 12);
let currentYear = Math.trunc(now / yearInMiliseconds) + 1970;

let yearInMiliseconds = 31556926000;
let monthInMiliseconds = 2629743833.3334;

let themonth = now / 2629743833.3334 / 12; //now divided by number of miliseconds in month divided by month

(month) => {
  month = month % 1;
  console.log(month);

  month = month * 12;
  console.log(month);

  months[Math.floor(month)];
  console.log(month);
};
