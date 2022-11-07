timestamp = {
  timecode: now,
  month: "",
  day: "",
  year: "",
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
Math.trunc((now / 1000 / 3600 / 24) % 12);
let currentYear = Math.trunc(now / yearInMiliseconds) + 1970;

let yearInMiliseconds = 31556926000;
let monthInMiliseconds = 2629743833.3334;

let themonth = now / 2629743833.3334 / 12; //now divided by number of miliseconds in month divided by month

function crush(themonth) {
  themooonth = themonth % 1; //grab months leftover from year
  themooonth = themoonth * 12; //multiply by 12 to get month...probably round down
  return months[Math.floor(themooonth)];
}
// javascript.info/date
// Date.parse(str);
