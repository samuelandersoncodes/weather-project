function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
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
    "December"
  ];


  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentYear = date.getFullYear();
  let currentDate = date.getDate();

  let formattedDate =
    `
    Today is 
    ${currentDay} 
    ${currentMonth}
    ${currentDate},
    ${currentYear}
    `;
  return formattedDate;
}

let date = new Date();
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(date);

function formatTime(date) {
  let currentHour = date.getHours();
  if (currentHour < 10) {
    hours = `0{hours}`;
  }
  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    minutes = `0{hours}`;
  }
  return `${currentHour} : ${currentMinute} `
}

let time = new Date();
let timeElement = document.querySelector("#time")
timeElement.innerHTML = formatTime(date);
