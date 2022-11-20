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

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city")
  let cityInput = document.querySelector("#city-input");
  city.innerHTML = cityInput.value;
}
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", search);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 16;
}
let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 46;
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

// function showWeather(response) {
//   let temperature = Math.round(response.data.main.temp);
//   let city = response.data.name;
//   let weatherReport = `It is ${temperature}°C in ${city}`;
//   let h1 = document.querySelector("h1");
//   h1.innerHTML = weatherReport;
// }


// let apiKey = "dd9de2db37b425827a3d32ecdc9508d4";
// let units = "metric";
// let city = "city";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`
// axios.get(apiUrl).then(showWeather);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let weatherReport = document.querySelector("h1");
  weatherReport.innerHTML = `Temperature is ${temperature}°C & humidity is ${humidity}g.m*3`;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "dd9de2db37b425827a3d32ecdc9508d4";
  let city = "city";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndPoint}q=${city}&units=${units}&appid=${apiKey}&lat=${latitude}&lon=${longitude}`;
  axios(apiUrl).then(showTemperature);
  }
navigator.geolocation.getCurrentPosition(showPosition);
