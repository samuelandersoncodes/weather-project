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
    currentHour = `0{currentHour}`;
  }
  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0{currentMinute}`;
  }
  return `${currentHour} : ${currentMinute} `
}

let time = new Date();
let timeElement = document.querySelector("#time")
timeElement.innerHTML = formatTime(date);

async function getWeather() {
  let response = await 
  fetch('https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=2494e01f1e94ad8c5106665c9c6e14ae&units=metric');
  let data = await response.json();
  return data;
}

let temp = document.getElementById("temperature");
getWeather().then(response => {temp.innerHTML= Math.round(response.main.temp)});

let humidity = document.getElementById("humidity");
getWeather().then(response => {humidity.innerHTML= Math.round(response.main.humidity)});

let wind = document.getElementById("wind");
getWeather().then(response => {wind.innerHTML= (response.main.humidity)});

let pressure = document.getElementById("pressure");
getWeather().then(response => {pressure.innerHTML= Math.round(response.main.pressure)});




