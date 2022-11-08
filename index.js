timestamp = {
  timecode: now,
  month: month,
  day: "",
  year: year,
};
let time = {
  hour: now.getHours,
  minutes: now.getMinutes,
  seconds: now.getSeconds,
  date: now.getDate(),
  day: now.getDay(),
  year: now.getFullYear(),
  month: months[now.getMonth()],
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

function crush(themonth) {
  themooonth = themonth % 1; //grab months leftover from year
  themooonth = themoonth * 12; //multiply by 12 to get month...probably round down
  return months[Math.floor(themooonth)]; //round down int from previous calcs and apply to month array
}
// javascript.info/date
// Date.parse(str);
